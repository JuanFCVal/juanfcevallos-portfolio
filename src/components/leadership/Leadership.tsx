import CheckIcon from "./icons/CheckIcon";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const experiences = [
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
    role: "Tech lead",
    company: "Digo AI",
    period: "2023 — 2024",
    location: "Ecuador / Hybrid",
    highlights: [
      "Develop end-to-end systems across multiple products, from backend services and APIs to frontend apps/mobile apps and integrations.",
      "Took full technical ownership (architecture + execution), driving projects from concept to production in real 24/7 operational environments.",
      "Designed and delivered a real-time transportation system for one of Ecuador’s largest bus station. Increasing revenue by 30% improving penalty management and operational efficiency.",
      "Integrated AI camera systems with embedded hardware, reverse-engineering proprietary protocols to enable reliable on-device communication.",
      "Scaled a food ordering & billing platform used by 150+ restaurants",
      "Led technical direction across projects while staying hands-on: coding, reviewing, mentoring, and enforcing engineering standards.",
      "Shape roadmaps, prioritize work, and deliver stable systems under tight timelines."
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
      "Participated in Torre’s Inmersion Program, contributing to the development and stabilization of their main platform under a fast-paced release cycle.",
      "Debugged and resolved software issues reported by internal teams.",
      "Collaborated with cross-functional teams to stabilize beta releases in a high-pressure environment."
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
      "Develolp MVPs with no code tools like Bubble, enabling rapid prototyping and validation of ideas.",
      "Built and maintained integrations with external platforms such as WhatsApp Business API, enabling scalable customer communication workflows.",
      "Developed performant, mobile-first user interfaces focused on reliability in high-usage environments.",
      "Engineered internal tools and testing modules to validate business logic and improve system robustness.",
      "Collaborated directly with clients to translate business requirements into scalable technical solutions.",
    ],
    tech: ["Typescript", "Ionic", "React Native", "React", "Angular", "Express.js", "Node.js", "PostgreSQL", "REST APIs", "HTML", "CSS", "Jest"]
  },
  {
    role: "Frontend Developer",
    company: "PuntoPymes Cia. Ltda",
    period: "2021 - 2022",
    location: "Ecuador / On site",
    highlights: [
      "Started as a Flutter developer and quickly expanded to Ionic and Angular, adapting to evolving business needs across multiple client projects.",
      "Developed and maintained a restaurant management app and a parking system.",
      "Built a web management platform in Angular to oversee 100+ retail stores, enabling bulk operations, performance tracking, and centralized control.",
      "Automated the deployment of a template-based e-commerce system, reducing delivery time from 2 days to 1 hour through a custom Python script.",
      "Collaborated directly with clients to gather requirements, design prototypes, and deliver production-ready applications on Google Play.",
      "Balanced speed and quality in fast-paced environments, ensuring consistent delivery of scalable and maintainable solutions."
    ],
    tech: ["TypeScript", "Python", "Flutter", "Ionic", "Angular", "React", "Firebase", "Google Play"]
  }
];

export default function Leadership() {
  return (
    <section
      id="experience"
      className="py-20 lg:py-28"
      style={{ background: "#F8F9FC" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll animation="fade-right" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#E85D26]" />
            <span className="text-xs font-bold tracking-[0.3em] text-[#E85D26] uppercase">Experience</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[#1B2A4A] leading-tight">
            WORK EXPERIENCE, SKILLS &amp; IMPACT
            <br />
          </h2>
          <p className="text-slate-500 mt-3 max-w-md text-sm leading-relaxed">
            A track record of delivering products across multiple organizations.
          </p>
        </AnimateOnScroll>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#1B2A4A] via-[#2D4A6E] to-transparent hidden md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <AnimateOnScroll key={i} animation="fade-up" delay={i * 100} className="relative md:pl-14">
                <div className="absolute left-2.5 top-5 w-3 h-3 rounded-full bg-[#E85D26] ring-4 ring-[#F8F9FC] hidden md:block" />

                <div
                  className="p-6 lg:p-8 rounded-xl border border-slate-200 hover:border-[#2D4A6E]/40 transition-all hover:shadow-lg"
                  style={{ background: "#ffffff" }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-xl font-black text-[#1B2A4A] tracking-tight">{exp.role}</h3>
                      <div className="text-[#2D4A6E] font-bold text-sm mt-0.5">{exp.company}</div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="text-xs font-bold text-[#E85D26] tracking-wider bg-[#E85D26]/10 px-2 py-1 rounded">
                        {exp.period}
                      </div>
                      <div className="text-xs text-slate-400 mt-1">{exp.location}</div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((hl, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-[#E85D26] mt-0.5">
                          <CheckIcon />
                        </span>
                        {hl}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs font-semibold px-2.5 py-1 rounded border border-[#2D4A6E]/20 text-[#2D4A6E] bg-[#2D4A6E]/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
