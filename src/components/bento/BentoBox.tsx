import AirplaneIcon from "./icons/AirplaneIcon";
import SoccerIcon from "./icons/SoccerIcon";
import LaptopIcon from "./icons/LaptopIcon";
import MusicIcon from "./icons/MusicIcon";
import BookIcon from "./icons/BookIcon";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function BentoBox() {
  return (
    <section className="py-20 lg:py-28 bg-surface relative overflow-hidden">
      <span
        className="absolute right-0 top-1/2 -translate-y-1/2 text-[22vw] font-black leading-none select-none pointer-events-none"
        style={{ color: "rgba(255,255,255,0.012)" }}
        aria-hidden="true"
      >
        07
      </span>

      <div className="relative max-w-6xl mx-auto px-6">

        <AnimateOnScroll animation="fade-up" className="mb-10">
          <p className="font-mono text-xs tracking-[0.3em] mb-5" style={{ color: "rgba(0,212,168,0.6)" }}>
            07 / PERSONAL
          </p>
          <h2 className="text-3xl lg:text-4xl font-black tracking-tight text-primary">
            BEYOND THE CODE
          </h2>
          <p className="text-sm mt-2 text-secondary">Work is what I do — these are what I love.</p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 auto-rows-fr">

          {/* Travel — tall card */}
          <AnimateOnScroll animation="fade-right" delay={0} className="lg:row-span-2">
            <div
              className="relative rounded-xl overflow-hidden p-7 flex flex-col justify-between min-h-64 h-full"
              style={{
                background: "linear-gradient(145deg, #0d1f3c 0%, #162d54 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div>
                <div className="text-white/40 mb-5">
                  <AirplaneIcon />
                </div>
                <div className="font-mono text-xs tracking-[0.3em] text-accent/60 mb-2 uppercase">Hobby</div>
                <h3 className="text-2xl font-black text-primary mb-3">TRAVEL</h3>
                <p className="text-sm leading-relaxed text-secondary">
                  Exploring different cultures sharpens perspective in life.
                  Remote work lets me turn the world into my office.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Sports */}
          <AnimateOnScroll animation="fade-up" delay={100}>
            <div
              className="relative rounded-xl overflow-hidden p-6 flex flex-col justify-between min-h-44"
              style={{
                background: "linear-gradient(145deg, rgba(0,212,168,0.15) 0%, rgba(0,168,130,0.08) 100%)",
                border: "1px solid rgba(0,212,168,0.15)",
              }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-mono text-xs tracking-[0.3em] text-accent/60 mb-2 uppercase">Passion</div>
                  <h3 className="text-xl font-black text-primary">SPORTS</h3>
                </div>
                <div className="text-accent/50">
                  <SoccerIcon />
                </div>
              </div>
              <div>
                <p className="text-sm leading-relaxed text-secondary mb-3">
                  Football fanatic &amp; amateur runner. Sports are my go-to for recharging.
                </p>
                <div className="flex gap-2 flex-wrap">
                  {["Football", "Running", "Weightlifting"].map((s) => (
                    <span
                      key={s}
                      className="font-mono text-xs px-2.5 py-0.5 rounded"
                      style={{
                        background: "rgba(0,212,168,0.1)",
                        border: "1px solid rgba(0,212,168,0.15)",
                        color: "var(--accent)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Remote Work */}
          <AnimateOnScroll animation="fade-up" delay={200}>
            <div
              className="relative rounded-xl overflow-hidden p-6 flex flex-col justify-between min-h-44"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-mono text-xs tracking-[0.3em] text-secondary/50 mb-2 uppercase">Lifestyle</div>
                  <h3 className="text-xl font-black text-primary">REMOTE</h3>
                </div>
                <div className="text-secondary/40">
                  <LaptopIcon />
                </div>
              </div>
              <p className="text-sm leading-relaxed text-secondary">
                5+ years async-first. Built frameworks for remote team health and knowledge sharing.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Music */}
          <AnimateOnScroll animation="fade-up" delay={300}>
            <div
              className="relative rounded-xl overflow-hidden p-6 flex flex-col justify-between min-h-36"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-mono text-xs tracking-[0.3em] text-secondary/50 mb-2 uppercase">Vibe</div>
                  <h3 className="text-xl font-black text-primary">MUSIC</h3>
                </div>
                <div className="text-secondary/40">
                  <MusicIcon />
                </div>
              </div>
              <p className="text-sm text-secondary mt-2">
                I listen to music 90% of the time.
              </p>
            </div>
          </AnimateOnScroll>

          {/* Reading */}
          <AnimateOnScroll animation="fade-up" delay={400}>
            <div
              className="relative rounded-xl overflow-hidden p-6 flex flex-col justify-between min-h-36"
              style={{
                background: "linear-gradient(145deg, rgba(232,232,232,0.05) 0%, rgba(232,232,232,0.02) 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="font-mono text-xs tracking-[0.3em] text-accent/50 mb-2 uppercase">Always</div>
                  <h3 className="text-xl font-black text-primary">READING</h3>
                </div>
                <div className="text-secondary/40">
                  <BookIcon />
                </div>
              </div>
              <p className="text-sm text-secondary mt-2">
                Self improvement, fiction, and history. Always have a book on my nightstand.
              </p>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
