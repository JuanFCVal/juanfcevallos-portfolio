import AirplaneIcon from "./icons/AirplaneIcon";
import SoccerIcon from "./icons/SoccerIcon";
import LaptopIcon from "./icons/LaptopIcon";
import MusicIcon from "./icons/MusicIcon";
import BookIcon from "./icons/BookIcon";
import TravelBackground from "./svgs/TravelBackground";
import SportsBackground from "./svgs/SportsBackground";
import RemoteWorkBackground from "./svgs/RemoteWorkBackground";

const destinations = [
  "Colombia", "USA", "Mexico", "Peru", "Spain", "Argentina",
];

export default function BentoBox() {
  return (
    <section
      className="py-20 lg:py-28 border-t border-slate-100"
      style={{ background: "#F8F9FC" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-8 h-0.5 bg-[#E85D26]" />
            <span className="text-xs font-bold tracking-[0.3em] text-[#E85D26] uppercase">Personal</span>
            <div className="w-8 h-0.5 bg-[#E85D26]" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-black text-[#1B2A4A] leading-tight">
            PERSONAL CONNECTION &amp;
            <br />
            <span className="text-[#2D4A6E]">HOBBY BENTO BOX.</span>
          </h2>
          <p className="text-slate-500 text-sm mt-3 max-w-md mx-auto">
            Work is what I do; these are what I love.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-fr">

          <div
            className="lg:row-span-2 relative rounded-2xl overflow-hidden p-8 flex flex-col justify-between min-h-64"
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
                Exploring different cultures sharpens perspective — both in design and in life.
                Remote work has let me turn the world into my office.
              </p>
            </div>
            <div className="relative mt-6">
              <div className="text-xs font-bold text-slate-400 tracking-wider mb-3 uppercase">Visited</div>
              <div className="flex flex-wrap gap-2">
                {destinations.map((dest) => (
                  <span
                    key={dest}
                    className="text-xs font-semibold text-white/80 bg-white/10 px-2.5 py-1 rounded-full border border-white/10"
                  >
                    {dest}
                  </span>
                ))}
              </div>
            </div>
          </div>

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
                Football fanatic &amp; amateur runner. Competitive spirit on the pitch mirrors
                how I push engineering teams to excellence.
              </p>
              <div className="flex gap-2 mt-3">
                {["⚽ Football", "🏃 Running", "🎾 Tennis"].map((s) => (
                  <span key={s} className="text-xs font-semibold bg-white/15 text-white px-2 py-0.5 rounded-full">{s}</span>
                ))}
              </div>
            </div>
          </div>

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
              4+ years of async-first distributed work. I&apos;ve built frameworks for remote team health,
              rituals, and knowledge sharing.
            </p>
          </div>

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
              Coding to lofi, leading to jazz. Music shapes every context-switch.
            </p>
          </div>

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
              Tech leadership, system design, and the occasional sci-fi novel.
              Current: &quot;Staff Engineer&quot; by Will Larson.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
