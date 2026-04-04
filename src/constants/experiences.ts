export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  highlights: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    role: "Senior Software Engineer / Tech Lead",
    company: "PPM",
    period: "2024 — Present",
    location: "Ecuador / Remote",
    highlights: [
      "Develop from scratch 100% of the first version of Sorvo, the most exclusive wine club in Ecuador.",
      "Led architecture of a multi-platform digital ecosystem with mobile and web apps ensuring scalability and maintainability",
      "Managed a team of 4 engineers, fostering a culture of ownership and continuous learning.",
      "Led internal initiatives to improve productivity, knowledge sharing, technical capacitations to developers across the company.",
      "Maintain +85% test coverage across all codebases, ensuring high reliability and confidence in deployments.",
      "Promoted from Mobile Developer to Tech Lead within 6 months, recognizing leadership and technical impact.",
      "Automate processes with N8N, reducing manual work and improving operational efficiency.",
    ],
    tech: ["Typescript", "Php", "Jest", "Next.js", "React", "React Native", "VTEX", "AWS", "Drupal", ".NET", "PostgreSQL", "Api Gateway", "N8N"],
  },
  {
    role: "Tech Lead",
    company: "Digo AI",
    period: "2023 — 2024",
    location: "Ecuador / Hybrid",
    highlights: [
      "Develop end-to-end systems across multiple products, from backend services and APIs to frontend apps/mobile apps and integrations.",
      "Took full technical ownership (architecture + execution), driving projects from concept to production in real 24/7 operational environments.",
      "Designed and delivered a real-time transportation system for one of Ecuador's largest bus station. Increasing revenue by 30% improving penalty management and operational efficiency.",
      "Integrated AI camera systems with embedded hardware, reverse-engineering proprietary protocols to enable reliable on-device communication.",
      "Scaled a food ordering & billing platform used by 150+ restaurants",
      "Led technical direction across projects while staying hands-on: coding, reviewing, mentoring, and enforcing engineering standards.",
      "Shape roadmaps, prioritize work, and deliver stable systems under tight timelines.",
    ],
    tech: ["Jest", "Next.js", "Nest.js", "React", "React Native", "Python", "Node.js", "Docker", "PostgreSQL", "Firebase", "Digital Ocean", "AWS"],
  },
  {
    role: "Full Stack Software Engineer",
    company: "Torre AI",
    period: "2023 - 2023",
    location: "San Francisco, CA / Remote",
    highlights: [
      "Develop features for recruiters using microservices and micro frontends.",
      "Participated in Torre's Inmersion Program, contributing to the development and stabilization of their main platform under a fast-paced release cycle.",
      "Debugged and resolved software issues reported by internal teams.",
      "Collaborated with cross-functional teams to stabilize beta releases in a high-pressure environment.",
    ],
    tech: ["Typescript", "Vue.js", "Scala", "Nuxt.js", "Jest", "Node.js", "PostgresSQL", "Docker"],
  },
  {
    role: "Software Developer",
    company: "Tinkin",
    period: "2022 - 2023",
    location: "Ecuador / Remote",
    highlights: [
      "Designed and implemented backend services using Node.js, PostgreSQL, and RESTful APIs to support production-grade applications.",
      "Develop mobile applications with Ionic Angular, React Native",
      "Develop web applications with React, ensuring responsive design and optimal performance across devices.",
      "Develop MVPs with no code tools like Bubble, enabling rapid prototyping and validation of ideas.",
      "Built and maintained integrations with external platforms such as WhatsApp Business API, enabling scalable customer communication workflows.",
      "Developed performant, mobile-first user interfaces focused on reliability in high-usage environments.",
      "Engineered internal tools and testing modules to validate business logic and improve system robustness.",
      "Collaborated directly with clients to translate business requirements into scalable technical solutions.",
    ],
    tech: ["Typescript", "Ionic", "React Native", "React", "Angular", "Express.js", "Node.js", "PostgreSQL", "REST APIs", "HTML", "CSS", "Jest"],
  },
  {
    role: "Frontend Developer",
    company: "PuntoPymes",
    period: "2021 - 2022",
    location: "Ecuador / On site",
    highlights: [
      "Started as a Flutter developer and quickly expanded to Ionic and Angular, adapting to evolving business needs across multiple client projects.",
      "Developed and maintained a restaurant management app and a parking system.",
      "Built a web management platform in Angular to oversee 100+ retail stores, enabling bulk operations, performance tracking, and centralized control.",
      "Automated the deployment of a template-based e-commerce system, reducing delivery time from 2 days to 1 hour through a custom Python script.",
      "Collaborated directly with clients to gather requirements, design prototypes, and deliver production-ready applications on Google Play.",
      "Balanced speed and quality in fast-paced environments, ensuring consistent delivery of scalable and maintainable solutions.",
    ],
    tech: ["TypeScript", "Python", "Flutter", "Ionic", "Angular", "React", "Firebase", "Google Play"],
  },
];
