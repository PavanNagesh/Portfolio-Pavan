import { techCategories } from "@/data/tech-stack";

export const marqueeTechnologies = [
  ...new Set(techCategories.flatMap((category) => category.items)),
];
