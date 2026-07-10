import { personalInfo } from "@/data/personal";

export interface SocialLink {
  id: string;
  label: string;
  href: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    href: personalInfo.github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: personalInfo.linkedin,
  },
];
