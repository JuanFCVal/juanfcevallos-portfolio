const items = [
  "React", "TypeScript", "Next.js", "Node.js", "React Native",
  "PostgreSQL", "AWS", "Docker", "Python", "Nest.js",
  "Tech Lead", "CI/CD", "System Design", "Mobile Dev", "Full-Stack",
];

const doubled = [...items, ...items];

export default function TechMarquee() {
  return (
    <div
      className="overflow-hidden py-3 select-none"
      style={{ borderTop: "1px solid rgba(255,255,255,0.05)", borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      aria-hidden="true"
    >
      <div className="marquee-track flex items-center gap-0 w-max">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="font-mono text-xs tracking-[0.25em] uppercase whitespace-nowrap px-5"
              style={{ color: "rgba(136,136,136,0.45)" }}
            >
              {item}
            </span>
            <span
              className="text-[8px]"
              style={{ color: "rgba(0,212,168,0.25)" }}
            >
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
