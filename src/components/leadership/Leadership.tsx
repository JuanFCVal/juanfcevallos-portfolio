import CheckIcon from "./icons/CheckIcon";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { experiences } from "@/constants/experiences";

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
