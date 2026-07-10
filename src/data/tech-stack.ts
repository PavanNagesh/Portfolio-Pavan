import type { TechCategory } from "@/types/portfolio";

export const techCategories: TechCategory[] = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    items: ["Python", "C++", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "Layout",
    items: ["React.js", "Next.js", "Flutter", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "Server",
    items: ["Node.js", "FastAPI", "REST APIs", "Microservices", "Blockchain"],
  },
  {
    id: "ai-ml",
    title: "AI & ML",
    icon: "Brain",
    items: [
      "Machine Learning",
      "Generative AI",
      "LLMs",
      "RAG",
      "LangChain",
      "OCR",
      "EDA",
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "Database",
    items: ["MongoDB", "MySQL", "MSSQL"],
  },
  {
    id: "cloud",
    title: "Cloud",
    icon: "Cloud",
    items: ["Vercel", "CI/CD", "MQTT", "Linux", "Ansible"],
  },
  {
    id: "tools",
    title: "Developer Tools",
    icon: "Wrench",
    items: ["Git", "Jupyter", "ESP32", "Arduino", "Scikit-learn"],
  },
  {
    id: "architecture",
    title: "Architecture",
    icon: "Network",
    items: [
      "Microservices",
      "Multi-agent RAG",
      "Beckn Protocol",
      "Event-driven Systems",
      "Full-Stack Development",
    ],
  },
];
