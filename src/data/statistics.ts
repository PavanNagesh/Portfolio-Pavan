import type { Statistic } from "@/types/portfolio";

export const statistics: Statistic[] = [
  { id: "products", label: "Products Managed", value: 1000, suffix: "+" },
  { id: "time-saved", label: "Workflow Time Saved", value: 80, suffix: "%" },
  { id: "ml-accuracy", label: "ML Prediction Accuracy", value: 90, suffix: "%" },
  { id: "hackathon-rank", label: "National Hackathon Rank", value: 3, prefix: "Top " },
];
