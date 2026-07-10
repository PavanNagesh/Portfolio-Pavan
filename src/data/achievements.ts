import type { Achievement } from "@/types/portfolio";

export const achievements: Achievement[] = [
  {
    id: "samved-hackathon",
    title: "Samved Hackathon 2026",
    subtitle: "3rd place nationally · top 3 of 500+ teams",
    description:
      "Built an IoT water distribution system with ESP32 sensors, MQTT, and a small ML model to balance zone supply. Won INR 50,000.",
    impact: [
      "INR 50,000 prize",
      "Top 3 of 500+ teams",
      "20% less supply imbalance in tests",
      "~90% zone allocation accuracy",
    ],
    year: "2026",
    icon: "Trophy",
  },
  {
    id: "production-saas",
    title: "SmartQuote went live",
    subtitle: "Freelance · Klean Tech Systems",
    description:
      "Built a quoting and invoicing app a retail client still uses every day. Not a demo. Real daily use.",
    impact: [
      "~80% faster quoting",
      "CI/CD on Vercel",
      "1,000+ products in catalog",
    ],
    year: "2025",
    icon: "Rocket",
  },
  {
    id: "clinical-ai",
    title: "Clinical AI internship",
    subtitle: "Traction Layer AI",
    description:
      "Helped build a system that turns clinical conversations into structured notes, using hospital docs for context.",
    impact: [
      "SOAP notes from live audio",
      "RAG over hospital docs",
      "Privacy-aware design choices",
    ],
    year: "2025",
    icon: "Stethoscope",
  },
  {
    id: "beckn-protocol",
    title: "Infosys Beckn project",
    subtitle: "Decentralized booking prototype",
    description:
      "Four microservices following Beckn Protocol specs for async slot booking. Good intro to protocol-based microservices.",
    impact: [
      "Gateway + BAP + BPP + AI service",
      "Async inter-service flows",
      "Infosys internship completion",
    ],
    year: "2025",
    icon: "Layers",
  },
];
