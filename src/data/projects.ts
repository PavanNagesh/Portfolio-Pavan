import type { Project } from "@/types/portfolio";
import { reportUrls } from "@/data/reports";

export const projects: Project[] = [
  {
    id: "educhain-guard",
    title: "Blockchain-Based Academic Certificate Verification Platform (EduChainGuard)",
    subtitle: "Blockchain • Full Stack • Web3",
    techStack: ["React", "Flask", "Solidity", "Ethereum", "MongoDB", "IPFS"],
    summary:
      "Secure blockchain-based certificate verification using Ethereum smart contracts and IPFS.",
    description:
      "Developed a full-stack blockchain application enabling tamper-proof academic certificate verification using Ethereum smart contracts and SHA-256 hashing.\n\nImplemented MetaMask integration, decentralized IPFS storage, role-based dashboards, secure authentication, and REST APIs for certificate management and verification.\n\nThe platform allows institutions to issue certificates on-chain while enabling employers and verifiers to validate credentials without relying on centralized databases.",
    features: [
      "Ethereum smart contracts with SHA-256 certificate hashing",
      "MetaMask integration and decentralized IPFS storage",
      "Role-based dashboards with Google OAuth authentication",
      "REST APIs for secure certificate management and verification",
    ],
    highlights: [
      { label: "Solidity", variant: "blockchain" },
      { label: "Ethereum", variant: "blockchain" },
      { label: "MetaMask", variant: "blockchain" },
      { label: "IPFS", variant: "blockchain" },
      { label: "Web3", variant: "blockchain" },
      { label: "Smart Contracts", variant: "blockchain" },
    ],
    links: [
      {
        type: "github",
        href: "https://github.com/PavanNagesh/EduChainGuard",
        label: "GitHub",
      },
    ],
  },
  {
    id: "telecom-churn",
    title: "Telecom Customer Churn Intelligence & Revenue Risk Analytics",
    subtitle: "Business Intelligence • ETL • Data Engineering",
    techStack: ["IIDMC", "Power BI", "SQL", "ETL", "Data Warehousing", "Star Schema"],
    summary:
      "ETL pipelines and Power BI dashboards for churn prediction, revenue leakage, and telecom BI.",
    description:
      "Designed and implemented an end-to-end ETL pipeline using Informatica Intelligent Data Management Cloud (IIDMC) with five transformation workflows, processing more than 1,500 telecom customer records into business-ready analytical datasets.\n\nDeveloped customer intelligence workflows using Joiner, Expression, Filter, Router, Aggregator, Sorter, and Rank transformations to derive KPIs including customer segmentation, churn analysis, retention priority, revenue leakage scoring, and service usage analytics.\n\nBuilt an interactive Power BI dashboard with KPI cards, drill-down filters, and business insights to identify high-risk customers and improve decision making.",
    features: [
      "End-to-end ETL pipeline with five IIDMC transformation workflows",
      "Customer segmentation, churn analytics, and retention priority scoring",
      "Revenue leakage analysis and service usage KPI generation",
      "Star schema data warehouse with interactive Power BI dashboards",
    ],
    highlights: [
      { label: "Informatica Cloud (IIDMC)", variant: "data", emphasized: true },
      { label: "ETL", variant: "data" },
      { label: "Power BI", variant: "data" },
      { label: "Data Integration", variant: "data" },
      { label: "Business Intelligence", variant: "data" },
      { label: "Revenue Analytics", variant: "data" },
    ],
    links: [
      {
        type: "paper",
        href: reportUrls.iimdc,
        label: "Report",
      },
    ],
  },
  {
    id: "5g-edge-security",
    title: "Detection and Mitigation of Security Threats in Simulated 5G Edge Networks",
    subtitle: "5G Networks • Cyber Security • Edge Computing",
    techStack: ["Open5GS", "UERANSIM", "Mininet-WiFi", "NGINX", "Linux"],
    summary:
      "Simulation of a secure 5G standalone network with attack detection and mitigation.",
    description:
      "Implemented a complete simulated 5G standalone architecture integrating Open5GS, UERANSIM, Mininet-WiFi, NGINX, and Linux networking tools.\n\nSimulated Distributed Denial of Service attacks, wireless mobility failures, and unauthorized subscriber access while demonstrating firewall protection, mobility recovery, and subscriber authentication.\n\nThe project demonstrates practical edge security controls within a realistic 5G SA testbed environment.",
    features: [
      "Complete 5G SA simulation with UE registration and edge computing",
      "DDoS attack detection with firewall-based mitigation",
      "Wireless mobility failure simulation and recovery mechanisms",
      "Unauthorized subscriber access detection and authentication controls",
    ],
    highlights: [
      { label: "5G", variant: "network" },
      { label: "Open5GS", variant: "network" },
      { label: "UERANSIM", variant: "network" },
      { label: "Edge Computing", variant: "network" },
      { label: "Cyber Security", variant: "network" },
      { label: "Network Simulation", variant: "network" },
    ],
  },
  {
    id: "speaker-verification",
    title: "Speaker Verification & Summarization",
    subtitle: "Deep Learning + NLP",
    techStack: ["Python", "PyTorch", "Whisper", "BART", "Librosa", "Scikit-learn"],
    summary:
      "End-to-end pipeline for speaker verification and abstractive meeting summaries.",
    description:
      "This project processes real-time audio to identify active speakers and generate concise, speaker-attributed meeting summaries.\n\nA Hybrid CNN-GRU model extracts 768-dimensional voice embeddings from Mel-Spectrograms, achieving a 5.96% Equal Error Rate across 16.2 million pairwise comparisons.\n\nWhisper handles transcription and BART produces abstractive summaries, with VAD and sliding-window segmentation enabling low-latency inference on live audio streams.",
    features: [
      "Architected a Hybrid CNN-GRU embedding model for voice verification",
      "Achieved 5.96% EER with rigorous FAR/FRR evaluation at scale",
      "Integrated Whisper and BART for transcription and summarization",
      "Built real-time audio preprocessing with VAD and 3-second windows",
    ],
    highlights: [
      { label: "Whisper", variant: "ai" },
      { label: "BART", variant: "ai" },
      { label: "GRU", variant: "ai" },
      { label: "FastAPI", variant: "default" },
      { label: "NLP", variant: "ai" },
      { label: "Speech AI", variant: "ai" },
    ],
    links: [
      {
        type: "github",
        href: "https://github.com/Pavan-Sanjana-KLE/Speaker-Identification-and-summarization",
        label: "GitHub",
      },
    ],
  },
  {
    id: "moneyflow-ai",
    title: "MoneyFlow AI",
    subtitle: "AI Finance Platform",
    techStack: ["React", "Node.js", "MongoDB", "Groq LLM", "Whisper", "Docker"],
    summary:
      "AI-powered finance app with voice expense entry and spending analytics.",
    description:
      "MoneyFlow AI is a MERN application that lets users track expenses manually or via voice, visualize spending patterns, and receive AI-driven financial insights.\n\nA Groq-powered pipeline converts natural speech into structured expense records with a human verification step. An LLM assistant analyzes spending history to generate personalized budgeting advice.\n\nThe stack includes JWT and Google OAuth authentication, multi-currency support, Docker/Ansible deployment, and Prometheus/Grafana monitoring.",
    features: [
      "Built full-stack MERN APIs with JWT auth and expense management",
      "Engineered a voice-to-expense pipeline using Groq Whisper and Llama",
      "Designed an analytics dashboard with multi-currency Recharts visualizations",
      "Automated production deployment with Docker, Ansible, and Grafana",
    ],
    highlights: [
      { label: "Cloud Native", variant: "cloud" },
      { label: "Docker", variant: "cloud" },
      { label: "Kubernetes", variant: "cloud" },
      { label: "AI Finance", variant: "ai" },
      { label: "Full Stack", variant: "default" },
    ],
    links: [
      {
        type: "github",
        href: "https://github.com/Pavan-Sanjana-KLE/MoneyFlowAI",
        label: "GitHub",
      },
    ],
  },
  {
    id: "blockchain-simulator",
    title: "Consensus-Aware Blockchain Simulator",
    subtitle: "Blockchain + ML",
    techStack: ["Python", "Scikit-learn", "Jupyter", "Blockchain", "PoW"],
    summary:
      "PoW blockchain simulator with ML models predicting network performance.",
    description:
      "A configurable proof-of-work simulator for exploring how mining difficulty and transaction volume affect blockchain throughput and latency.\n\nThe simulation engine logs metrics across load scenarios, and scikit-learn models trained on the output predict key performance indicators with ~90% accuracy.\n\nUseful for comparing network trade-offs before changing consensus parameters.",
    features: [
      "Built a configurable PoW simulation engine",
      "Logged throughput, latency, and energy metrics across scenarios",
      "Trained ML models to predict network performance (~90% accuracy)",
      "Compared blockchain behavior under varying load conditions",
    ],
    highlights: [
      { label: "Published Research", variant: "research", emphasized: true },
      { label: "Novel Research", variant: "research", emphasized: true },
      { label: "Machine Learning", variant: "ai" },
      { label: "Blockchain", variant: "blockchain" },
      { label: "Performance Prediction", variant: "ai" },
    ],
    links: [
      {
        type: "github",
        href: "https://github.com/Pavan-Sanjana-KLE/AIML-blockchain-project",
        label: "GitHub",
      },
      {
        type: "paper",
        href: reportUrls.blockchainJournal,
        label: "Research Paper",
      },
    ],
  },
  {
    id: "beckn-dapp",
    title: "Beckn Slot Booking DApp",
    subtitle: "Infosys Internship",
    techStack: ["Beckn Protocol", "Node.js", "Microservices", "REST APIs"],
    summary:
      "Decentralized slot booking demo built on the Beckn Protocol at Infosys.",
    description:
      "A decentralized slot booking prototype built during my Infosys internship using the Beckn Protocol specification.\n\nFour microservices — Gateway, BAP, BPP, and an AI service — communicate asynchronously following Beckn's request/response patterns for booking workflows.\n\nThe project demonstrates protocol-driven architecture and async orchestration across independent services.",
    features: [
      "Set up Gateway, BAP, BPP, and AI microservices per Beckn specs",
      "Implemented async inter-service booking workflows",
      "Mapped Beckn-compliant request/response patterns",
      "Built a decentralized slot booking demo end-to-end",
    ],
    highlights: [
      { label: "Beckn Protocol", variant: "blockchain" },
      { label: "Microservices", variant: "cloud" },
      { label: "Node.js", variant: "default" },
      { label: "Decentralized", variant: "blockchain" },
      { label: "Async APIs", variant: "default" },
    ],
    links: [
      {
        type: "github",
        href: "https://github.com/Pavan-Sanjana-KLE/Beckn-dapp-infosys",
        label: "GitHub",
      },
    ],
  },
  {
    id: "smart-water",
    title: "HydroOps Smart Water Distribution",
    subtitle: "IoT + ML",
    techStack: ["Flutter", "Python", "MQTT", "ESP32", "Arduino", "ML"],
    summary:
      "IoT water distribution system with demand forecasting and zone control.",
    description:
      "An AI-driven smart water distribution system built for Samved Hackathon 2026, placing 3rd nationally among 500+ teams.\n\nESP32 sensors stream flow data over MQTT to a Python backend with an ML demand forecasting model. A Flutter dashboard provides live zone monitoring and remote valve control.\n\nTesting showed a 20% reduction in supply imbalance and ~90% zone allocation accuracy.",
    features: [
      "Integrated ESP32 sensors with MQTT for live flow monitoring",
      "Built a Python ML pipeline for zone demand forecasting",
      "Developed a Flutter dashboard for valve control and zone management",
      "Achieved 3rd place at Samved Hackathon 2026 (top 3 of 500+ teams)",
    ],
    highlights: [
      { label: "Top 3 All India", variant: "award", emphasized: true },
      { label: "Hackathon Winner", variant: "award" },
      { label: "IoT", variant: "iot" },
      { label: "Machine Learning", variant: "ai" },
      { label: "Smart Water Distribution", variant: "iot" },
      { label: "Solapur Municipal Use Case", variant: "iot", emphasized: true },
    ],
    links: [
      {
        type: "github",
        href: "https://github.com/Team-HydroOps/HydroOps",
        label: "GitHub",
      },
      {
        type: "paper",
        href: reportUrls.eiotReport,
        label: "Report",
      },
    ],
  },
  {
    id: "smartquote",
    title: "SmartQuote",
    subtitle: "Freelance SaaS",
    techStack: ["React", "Node.js", "Vercel", "CI/CD", "Excel"],
    summary:
      "Quoting and invoicing SaaS for a retail client with 1,000+ products.",
    description:
      "SmartQuote is a production SaaS tool built for a retail client at Klean Tech Systems, replacing manual Excel-based quoting workflows.\n\nThe app manages a 1,000+ SKU catalog with instant search, generates quotes and invoice PDFs, supports bulk Excel imports, and handles automatic GST calculations.\n\nDeployed on Vercel with CI/CD, reducing quoting time by ~80% with daily client usage.",
    features: [
      "Built a full-stack quoting app with 1,000+ product catalog",
      "Implemented automatic GST calculations and invoice PDF generation",
      "Added bulk Excel import for rapid catalog population",
      "Deployed on Vercel with CI/CD — ~80% faster quoting",
    ],
    highlights: [
      { label: "Production SaaS", variant: "cloud", emphasized: true },
      { label: "Live Deployment", variant: "cloud" },
      { label: "Vercel", variant: "cloud" },
      { label: "CI/CD", variant: "cloud" },
      { label: "Full Stack", variant: "default" },
    ],
    links: [
      {
        type: "github",
        href: "https://github.com/flynnrapunzel913-ship-it/smartquotation-app",
        label: "GitHub",
      },
      {
        type: "live",
        href: "http://smartquotation-app-teal.vercel.app/",
        label: "Live Demo",
      },
    ],
  },
  {
    id: "multimodal-copilot",
    title: "Multimodal Generative AI Copilot",
    subtitle: "Generative AI • RAG • Multimodal",
    techStack: ["Python", "LLMs", "RAG", "Computer Vision", "NLP", "FastAPI"],
    summary:
      "Multimodal AI copilot combining vision, language, and retrieval for contextual assistance.",
    description:
      "A multimodal generative AI copilot that processes text, images, and structured data to deliver context-aware responses grounded in domain knowledge.\n\nBuilt with retrieval-augmented generation pipelines, the system combines embedding search with large language models for accurate, cited answers.\n\nDesigned for flexible deployment with API-first architecture and modular tool integration.",
    features: [
      "Multimodal input processing across text and visual modalities",
      "RAG pipeline with embedding search and citation grounding",
      "API-first architecture for modular tool integration",
      "Context-aware response generation with domain knowledge bases",
    ],
    highlights: [
      { label: "Python", variant: "default" },
      { label: "FastAPI", variant: "default" },
      { label: "RAG", variant: "ai", emphasized: true },
      { label: "OCR", variant: "ai" },
      { label: "LLM", variant: "ai" },
      { label: "Multimodal AI", variant: "ai" },
    ],
    links: [
      {
        type: "paper",
        href: reportUrls.genAiPaper,
        label: "Research Paper",
      },
    ],
  },
];
