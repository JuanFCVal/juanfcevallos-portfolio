const experiences = [
  {
    role: "Tech Lead",
    company: "PPM / Sorvo",
    period: "2022 — Present",
    location: "Ecuador / Remote",
    highlights: [
      "Led architecture of a multi-platform digital ecosystem serving 50K+ users",
      "Managed a multicultural team of 12 engineers across 3 countries",
      "Implemented AI-assisted code review, reducing PR cycle time by 40%",
      "Drove the platform migration to Next.js + AWS serverless infrastructure",
      "Defined engineering culture: ADRs, RFCs, and structured mentorship programs",
    ],
    tech: ["Next.js", "React Native", "AWS", "Node.js", ".NET", "PostgreSQL"],
  },
  {
    role: "Senior Full Stack Engineer",
    company: "Freelance / Consulting",
    period: "2020 — 2022",
    location: "Remote — LATAM / USA",
    highlights: [
      "Architected SaaS platforms for 5+ clients across fintech and logistics verticals",
      "Built React Native mobile apps from 0 to production",
      "Introduced DevOps practices: Docker, CI/CD pipelines, automated testing",
      "Reduced infrastructure costs by 35% through serverless migration",
    ],
    tech: ["React", "React Native", "Node.js", "Docker", "PostgreSQL", "Firebase"],
  },
  {
    role: "Full Stack Developer",
    company: "Startups / Agencies",
    period: "2016 — 2020",
    location: "Ecuador",
    highlights: [
      "Delivered 20+ web and mobile projects across various industries",
      "Mentored junior developers and established coding standards",
      "Introduced automated testing, growing coverage from 0% to 70%",
    ],
    tech: ["React", "Angular", "Node.js", "MongoDB", "MySQL"],
  },
];

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 mt-0.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export default function Leadership() {
  return (
    <section
      id="leadership"
      className="py-20 lg:py-28"
      style={{ background: "#F8F9FC" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-[#E85D26]" />
            <span className="text-xs font-bold tracking-[0.3em] text-[#E85D26] uppercase">Leadership</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[#1B2A4A] leading-tight">
            EXPERIENCE &amp;
            <br />
            <span className="text-[#2D4A6E]">IMPACT.</span>
          </h2>
          <p className="text-slate-500 mt-3 max-w-md text-sm leading-relaxed">
            A track record of leading teams, delivering products, and establishing
            engineering excellence across multiple organizations and geographies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1B2A4A] via-[#2D4A6E] to-transparent hidden md:block" />

          <div className="flex flex-col gap-10">
            {experiences.map((exp, i) => (
              <div key={i} className="relative md:pl-14">
                {/* Timeline dot */}
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
                    <div className="text-right flex-shrink-0">
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

                  {/* Tech tags */}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
