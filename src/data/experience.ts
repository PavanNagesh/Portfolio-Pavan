import type { Experience } from "@/types/portfolio";
import { reportUrls } from "@/data/reports";

export const experiences: Experience[] = [
  {
    id: "klean-tech",
    company: "Klean Tech Systems",
    role: "Freelance Full-Stack Developer",
    duration: "May 2026 – Present",
    location: "Hubli, India",
    description:
      "Built SmartQuote for a retail client: quotations, invoices, and a product catalog they use every day.",
    technologies: [
      "React",
      "Node.js",
      "Vercel",
      "CI/CD",
      "Excel Import",
      "GST Automation",
    ],
    impact: [
      "Shipped a live SaaS tool managing 1,000+ products with quotes, invoices, and customer records.",
      "Added bulk Excel import and automatic GST math so staff stopped copying numbers by hand.",
    ],
    metrics: [
      "1,000+ products",
      "80% faster quoting",
      "Fewer billing mistakes",
    ],
    githubUrl: "https://github.com/flynnrapunzel913-ship-it/smartquotation-app",
    liveUrl: "http://smartquotation-app-teal.vercel.app/",
  },
  {
    id: "traction-layer",
    company: "Traction Layer AI",
    role: "AI Research Intern",
    duration: "Sep 2025 – Mar 2026",
    location: "Hubli, India",
    description:
      "Worked on ambient clinical AI: turning doctor-patient conversations into structured notes without extra typing.",
    technologies: [
      "Python",
      "LLMs",
      "RAG",
      "Speech-to-Text",
      "Speaker Diarization",
      "Multi-agent Architecture",
    ],
    impact: [
      "Built a pipeline with multilingual speech-to-text, speaker separation, and LLM-generated SOAP notes.",
      "Used multi-agent RAG so notes could pull from hospital docs while staying within privacy constraints.",
    ],
    metrics: [
      "Live conversation to note draft",
      "Hospital KB grounding",
      "Multilingual audio support",
    ],
    githubUrl: "https://github.com/Pavan-Sanjana-KLE/Ambient-AI",
    paperUrl: reportUrls.ambAi,
  },
  {
    id: "infosys",
    company: "Infosys",
    role: "Project Intern",
    duration: "Aug 2025 – Jan 2026",
    location: "Hubli, India",
    description:
      "Helped build a decentralized slot booking demo on the Beckn Protocol with four separate services talking async.",
    technologies: [
      "Beckn Protocol",
      "Microservices",
      "Gateway",
      "BAP",
      "BPP",
      "Async Workflows",
    ],
    impact: [
      "Set up Gateway, BAP, BPP, and an AI service following Beckn's request/response patterns.",
      "Mapped out async flows between services so booking requests didn't block on slow peers.",
    ],
    metrics: [
      "4 microservices",
      "Beckn-compliant flows",
      "Async orchestration",
    ],
    githubUrl: "https://github.com/Pavan-Sanjana-KLE/Beckn-dapp-infosys",
  },
];
