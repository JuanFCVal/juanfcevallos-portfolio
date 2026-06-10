export type Project = {
  title: string;
  description: string;
  role: string;
  company: string;
  period: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
  isPrivate?: boolean;
  metric: string;
};

export const projects: Project[] = [
  {
    title: "Sorvo — Wine Club Platform",
    description:
      "Built Ecuador's most exclusive wine club from the ground up. Led end-to-end architecture of a multi-platform ecosystem: mobile app, web storefront, and backend APIs — from concept to production.",
    role: "Tech Lead",
    company: "PPM",
    period: "2024 — Present",
    tech: ["React Native", "Next.js", "TypeScript", "AWS", "PostgreSQL", "VTEX", ".NET"],
    liveUrl: "https://sorvo.ec",
    isPrivate: true,
    metric: "Built 0 → Production",
  },
  {
    title: "Real-Time Transportation System",
    description:
      "Designed and delivered a real-time fleet and penalty management system for one of Ecuador's largest bus stations. Reverse-engineered proprietary AI camera protocols for on-device communication.",
    role: "Tech Lead",
    company: "Digo AI",
    period: "2023 — 2024",
    tech: ["React", "Nest.js", "Python", "Node.js", "PostgreSQL", "Docker", "AWS"],
    isPrivate: true,
    metric: "+30% revenue increase",
  },
  {
    title: "F&B Ordering & Billing Platform",
    description:
      "Architected and shipped a food ordering and billing platform running 24/7 across 150+ restaurants. Full ownership: backend services, APIs, and mobile-first customer apps.",
    role: "Tech Lead",
    company: "Digo AI",
    period: "2023 — 2024",
    tech: ["React Native", "Next.js", "Nest.js", "Node.js", "PostgreSQL", "Firebase"],
    isPrivate: true,
    metric: "150+ restaurants",
  },
];
