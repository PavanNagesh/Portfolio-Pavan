import {
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
  type WheelEvent as ReactWheelEvent,
} from "react";
import { cn } from "@/lib/utils";

const SCROLL_SPEED = 0.45;

interface ProjectMarqueeProps {
  children: ReactNode;
  className?: string;
}

export function ProjectMarquee({ children, className }: ProjectMarqueeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const setRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const setWidthRef = useRef(0);
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ pointerX: 0, offset: 0 });
  const didDragRef = useRef(false);
  const rafRef = useRef<number>(0);

  const normalizeOffset = useCallback(() => {
    const width = setWidthRef.current;
    if (width <= 0) return;

    let offset = offsetRef.current;
    while (offset <= -width) offset += width;
    while (offset > 0) offset -= width;
    offsetRef.current = offset;
  }, []);

  const applyTransform = useCallback(() => {
    if (trackRef.current) {
      trackRef.current.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
    }
  }, []);

  const measureSetWidth = useCallback(() => {
    if (!setRef.current) return;
    setWidthRef.current = setRef.current.offsetWidth;
    normalizeOffset();
    applyTransform();
  }, [applyTransform, normalizeOffset]);

  useEffect(() => {
    measureSetWidth();

    const observer = new ResizeObserver(measureSetWidth);
    if (setRef.current) observer.observe(setRef.current);

    return () => observer.disconnect();
  }, [measureSetWidth]);

  useEffect(() => {
    const tick = () => {
      if (!isPausedRef.current && !isDraggingRef.current && setWidthRef.current > 0) {
        offsetRef.current -= SCROLL_SPEED;
        normalizeOffset();
        applyTransform();
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [applyTransform, normalizeOffset]);

  const handlePointerDown = (clientX: number) => {
    isDraggingRef.current = true;
    didDragRef.current = false;
    dragStartRef.current = { pointerX: clientX, offset: offsetRef.current };
    containerRef.current?.classList.add("is-dragging");
  };

  const handlePointerMove = (clientX: number) => {
    if (!isDraggingRef.current) return;

    const delta = clientX - dragStartRef.current.pointerX;
    if (Math.abs(delta) > 4) {
      didDragRef.current = true;
    }

    offsetRef.current = dragStartRef.current.offset + delta;
    normalizeOffset();
    applyTransform();
  };

  const handlePointerUp = () => {
    if (!isDraggingRef.current) return;

    isDraggingRef.current = false;
    containerRef.current?.classList.remove("is-dragging");
  };

  const pause = () => {
    isPausedRef.current = true;
    containerRef.current?.classList.add("is-paused");
  };

  const resume = () => {
    isPausedRef.current = false;
    isDraggingRef.current = false;
    containerRef.current?.classList.remove("is-paused", "is-dragging");
  };

  const handleWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    if (!isPausedRef.current) return;

    const delta =
      Math.abs(event.deltaX) > Math.abs(event.deltaY)
        ? event.deltaX
        : event.deltaY;

    if (delta === 0) return;

    event.preventDefault();
    offsetRef.current -= delta;
    normalizeOffset();
    applyTransform();
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (event: WheelEvent) => {
      if (!isPausedRef.current) return;
      event.preventDefault();
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "project-marquee relative select-none",
        "cursor-default",
        "[&.is-paused]:cursor-grab [&.is-dragging]:cursor-grabbing",
        className
      )}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onMouseDown={(event) => {
        if (event.button !== 0 || !isPausedRef.current) return;
        handlePointerDown(event.clientX);
      }}
      onMouseMove={(event) => {
        if (!isPausedRef.current) return;
        handlePointerMove(event.clientX);
      }}
      onMouseUp={handlePointerUp}
      onClickCapture={(event) => {
        if (!didDragRef.current) return;
        event.preventDefault();
        event.stopPropagation();
        didDragRef.current = false;
      }}
      onTouchStart={(event) => {
        pause();
        handlePointerDown(event.touches[0].clientX);
      }}
      onTouchMove={(event) => {
        if (!isDraggingRef.current) return;
        event.preventDefault();
        handlePointerMove(event.touches[0].clientX);
      }}
      onTouchEnd={() => {
        handlePointerUp();
        resume();
      }}
      onTouchCancel={() => {
        handlePointerUp();
        resume();
      }}
      onWheel={handleWheel}
    >
      <div className="overflow-hidden py-2">
        <div
          ref={trackRef}
          className="flex w-max will-change-transform"
          style={{ transform: "translate3d(0, 0, 0)" }}
        >
          <div ref={setRef} className="flex shrink-0 gap-5 pr-5">
            {children}
          </div>
          <div className="flex shrink-0 gap-5 pr-5" aria-hidden>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
