"""
Remove white background from portrait PNG using edge-connected flood fill.
Keeps the subject intact — only removes white areas connected to image borders.

Usage:
  py -3 scripts/remove-photo-bg.py
"""

from __future__ import annotations

from collections import deque
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
TARGETS = [ROOT / "public" / "me-1.png", ROOT / "me-1.png"]
WHITE_THRESHOLD = 228


def is_background_white(pixel: tuple[int, int, int, int]) -> bool:
    red, green, blue, _alpha = pixel
    return red >= WHITE_THRESHOLD and green >= WHITE_THRESHOLD and blue >= WHITE_THRESHOLD


def remove_white_background(path: Path) -> None:
    image = Image.open(path).convert("RGBA")
    width, height = image.size
    pixels = image.load()
    visited = [[False] * width for _ in range(height)]
    queue: deque[tuple[int, int]] = deque()

    for x in range(width):
        for y in (0, height - 1):
            if is_background_white(pixels[x, y]) and not visited[x][y]:
                visited[x][y] = True
                queue.append((x, y))

    for y in range(height):
        for x in (0, width - 1):
            if is_background_white(pixels[x, y]) and not visited[x][y]:
                visited[x][y] = True
                queue.append((x, y))

    while queue:
        x, y = queue.popleft()
        red, green, blue, _alpha = pixels[x, y]
        pixels[x, y] = (red, green, blue, 0)

        for dx, dy in ((0, 1), (0, -1), (1, 0), (-1, 0)):
            next_x, next_y = x + dx, y + dy
            if (
                0 <= next_x < width
                and 0 <= next_y < height
                and not visited[next_x][next_y]
                and is_background_white(pixels[next_x, next_y])
            ):
                visited[next_x][next_y] = True
                queue.append((next_x, next_y))

    image.save(path, "PNG")
    print(f"Saved transparent background: {path}")


def main() -> None:
    for target in TARGETS:
        if target.exists():
            remove_white_background(target)


if __name__ == "__main__":
    main()
