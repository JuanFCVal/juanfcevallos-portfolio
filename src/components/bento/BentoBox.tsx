import AirplaneIcon from "./icons/AirplaneIcon";
import SoccerIcon from "./icons/SoccerIcon";
import LaptopIcon from "./icons/LaptopIcon";
import MusicIcon from "./icons/MusicIcon";
import BookIcon from "./icons/BookIcon";
import TravelBackground from "./svgs/TravelBackground";
import SportsBackground from "./svgs/SportsBackground";
import RemoteWorkBackground from "./svgs/RemoteWorkBackground";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function BentoBox() {
  return (
    <section
      className="py-20 lg:py-28 border-t border-slate-100"
      style={{ background: "#F8F9FC" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <AnimateOnScroll animation="fade-up" className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-[#E85D26]" />
            <span className="text-xs font-bold tracking-[0.3em] text-[#E85D26] uppercase">Personal</span>
            <div className="w-8 h-0.5 bg-[#E85D26]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[#1B2A4A] leading-tight">
            MORE ABOUT ME
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto">
            Work is what I do; these are what I love.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">

          <AnimateOnScroll animation="fade-right" delay={0} className="lg:row-span-2">
            <div
              className="relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-64 h-full"
              style={{
                background: "linear-gradient(135deg, #1B2A4A 0%, #2D4A6E 100%)",
                boxShadow: "0 8px 30px rgba(27,42,74,0.15)",
              }}
            >
              <TravelBackground />
              <div className="relative">
                <div className="text-white/60 mb-4">
                  <AirplaneIcon />
                </div>
                <div className="text-xs font-bold tracking-[0.3em] text-[#E85D26] mb-2 uppercase">Hobby</div>
                <h3 className="text-3xl font-black text-white mb-3">TRAVEL</h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Exploring different cultures sharpens perspective in life.
                  Remote work has let me turn the world into my office.
                </p>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={100}>
            <div
              className="relative rounded-2xl overflow-hidden p-6 flex flex-col justify-between min-h-44"
              style={{
                background: "linear-gradient(135deg, #E85D26 0%, #c04a1e 100%)",
                boxShadow: "0 8px 30px rgba(232,93,38,0.15)",
              }}
            >
              <SportsBackground />
              <div className="relative flex items-start justify-between">
                <div>
                  <div className="text-xs font-bold tracking-[0.3em] text-white/60 mb-2 uppercase">Passion</div>
                  <h3 className="text-2xl font-black text-white">SPORTS</h3>
                </div>
                <div className="text-white/70">
                  <SoccerIcon />
                </div>
              </div>
              <div className="relative">
                <p className="text-white/80 text-sm leading-relaxed">
                  Football fanatic &amp; amateur runner. Sports are my go-to for recharging.
                </p>
                <div className="flex gap-2 mt-3">
                  {["⚽ Football", "🏃 Running", "🏋️‍♂️ Weightlifting"].map((s) => (
                    <span key={s} className="text-xs font-semibold bg-white/15 text-white px-2 py-0.5 rounded-full">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={200}>
            <div
              className="relative rounded-2xl overflow-hidden p-6 flex flex-col justify-between min-h-44 border border-slate-200"
              style={{ background: "#ffffff" }}
            >
              <RemoteWorkBackground />
              <div className="relative flex items-start justify-between">
                <div>
                  <div className="text-xs font-bold tracking-[0.3em] text-[#E85D26] mb-2 uppercase">Lifestyle</div>
                  <h3 className="text-2xl font-black text-[#1B2A4A]">REMOTE WORK</h3>
                </div>
                <div className="text-[#2D4A6E]">
                  <LaptopIcon />
                </div>
              </div>
              <p className="relative text-slate-500 text-sm leading-relaxed">
                5+ years of async-first distributed work. I&apos;ve built frameworks for remote team health,
                rituals, and knowledge sharing.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={300}>
            <div
              className="relative rounded-2xl overflow-hidden p-6 flex flex-col justify-between min-h-36 border border-slate-200"
              style={{ background: "#ffffff" }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-bold tracking-[0.3em] text-[#2D4A6E] mb-2 uppercase">Vibe</div>
                  <h3 className="text-xl font-black text-[#1B2A4A]">MUSIC</h3>
                </div>
                <div className="text-[#2D4A6E]">
                  <MusicIcon />
                </div>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed mt-2">
                I listen to music 90% of the time.
              </p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-up" delay={400}>
            <div
              className="relative rounded-2xl overflow-hidden p-6 flex flex-col justify-between min-h-36"
              style={{
                background: "linear-gradient(135deg, #2D4A6E 0%, #1B2A4A 100%)",
              }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-xs font-bold tracking-[0.3em] text-[#E85D26] mb-2 uppercase">Always</div>
                  <h3 className="text-xl font-black text-white">READING</h3>
                </div>
                <div className="text-white/60">
                  <BookIcon />
                </div>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed mt-2">
                Self improvement, fiction, and history. Always have a book on my nightstand.
              </p>
            </div>
          </AnimateOnScroll>

        </div>
      </div>
    </section>
  );
}
