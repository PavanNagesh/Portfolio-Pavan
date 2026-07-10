export const siteConfig = {
  name: "Pavan Nagesh",
  description:
    "Software engineer in Hubli. I build apps, break them, and fix them again.",
  url: "https://pavannagesh.dev",
  ogImage: "/og-image.png",
  keywords: [
    "Pavan Nagesh",
    "Software Engineer",
    "AI Engineering",
    "Full-Stack Developer",
    "RAG",
    "LLM",
    "React",
    "Python",
    "Hubli",
  ],
  footerQuote:
    "I've probably learned more fixing broken projects than starting new ones.",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Milestones", href: "#achievements" },
  { label: "Contact", href: "#contact" },
] as const;

export const commandItems = [
  { label: "Home", href: "#hero", group: "Navigation" },
  { label: "About", href: "#about", group: "Navigation" },
  { label: "Tech Stack", href: "#stack", group: "Navigation" },
  { label: "Experience", href: "#experience", group: "Navigation" },
  { label: "Projects", href: "#projects", group: "Navigation" },
  { label: "Milestones", href: "#achievements", group: "Navigation" },
  { label: "Skills", href: "#skills", group: "Navigation" },
  { label: "Journey", href: "#journey", group: "Navigation" },
  { label: "Contact", href: "#contact", group: "Navigation" },
  { label: "Download Resume", href: "/Pavan_Nagesh_Resume.pdf", group: "Actions" },
  { label: "GitHub", href: "https://github.com/PavanNagesh", group: "Social" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/pavan-nagesh-66b561297/", group: "Social" },
  { label: "Email", href: "mailto:pavannagesh681@gmail.com", group: "Social" },
] as const;
