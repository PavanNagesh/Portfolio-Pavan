import type { TimelineEvent } from "@/types/portfolio";

export const timelineEvents: TimelineEvent[] = [
  {
    id: "diploma",
    year: "2021",
    title: "Diploma in CS",
    description: "KLE Smt C.I.M Polytechnic. First time I actually built small apps that ran.",
    type: "education",
  },
  {
    id: "university",
    year: "2024",
    title: "B.E. Computer Science",
    description: "KLE Technological University. Systems, ML, software design. More theory, more building.",
    type: "education",
  },
  {
    id: "infosys-intern",
    year: "2025",
    title: "Infosys intern",
    description: "Beckn Protocol microservices for decentralized booking.",
    type: "work",
  },
  {
    id: "traction-layer",
    year: "2025",
    title: "AI research intern",
    description: "Clinical AI at Traction Layer. Speech pipelines, RAG, and note generation.",
    type: "work",
  },
  {
    id: "hackathon",
    year: "2026",
    title: "Samved Hackathon",
    description: "3rd place nationally. IoT and ML for water distribution.",
    type: "achievement",
  },
  {
    id: "current",
    year: "Now",
    title: "Building",
    description: "Freelance work, internships, side projects. Usually between semesters.",
    type: "focus",
  },
];
