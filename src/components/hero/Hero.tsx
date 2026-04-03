import Image from "next/image";
import NetworkBackground from "./svgs/NetworkBackground";
import PortraitNetwork from "./svgs/PortraitNetwork";

export default function Hero() {
  return (
    <section
      id="#about"
      className="relative overflow-hidden min-h-screen flex items-center"
      style={{ background: "#F8F9FC" }}
    >
      <div className="absolute inset-0 geo-pattern opacity-40 pointer-events-none" />
      <NetworkBackground />

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-28 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          <div className="flex justify-center lg:justify-end order-2 lg:order-1">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full border border-[#2D4A6E]/20 animate-spin" style={{ animationDuration: "30s" }} />
              <div className="absolute -inset-8 rounded-full border border-dashed border-[#2D4A6E]/10" />

              <div
                className="relative w-72 h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden float-anim"
                style={{
                  background: "linear-gradient(135deg, #1B2A4A 0%, #2D4A6E 50%, #3a5a80 100%)",
                  boxShadow: "0 20px 60px rgba(27,42,74,0.25), 0 0 0 6px rgba(45,74,110,0.15)",
                }}
              >
                <Image
                  alt="Profile picture of Juan F. Cevallos"
                  src="/profile_pic.jpeg"
                  width={300}
                  height={300}
                  loading="eager"
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="absolute -bottom-3 -right-3 bg-white rounded-xl px-3 py-2 shadow-lg border border-slate-100"
                style={{ boxShadow: "0 4px 20px rgba(27,42,74,0.12)" }}
              >
                <span className="text-xs font-bold text-[#E85D26] tracking-wider">Me, hiking. Now, let's take your company to new heights.</span>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex flex-col gap-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-black leading-tight tracking-tight">
                <span className="text-[#1B2A4A]">Juan Francisco</span>
                <br />
                <span className="text-[#2D4A6E]">Cevallos Valdivieso</span>
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-[#E85D26]" />
              <p className="text-lg font-bold tracking-widest text-[#1B2A4A] uppercase">
                Software Engineer
              </p>
            </div>

            <p className="text-base leading-relaxed text-slate-600 max-w-lg">
              I bridge strategy and execution designing{" "}
              <span className="font-semibold text-[#E85D26] bg-[#E85D26]/10 px-1 rounded">
                scalable and maintainable solutions
              </span>{" "}
              that align business goals with technical execution. Passionate about building{" "}
              <span className="font-semibold text-[#E85D26] bg-[#E85D26]/10 px-1 rounded">
                and boosting reality with technology.
              </span>
            </p>

            <div className="flex flex-wrap gap-3 mt-2">
              <a
                href="/Juan_Cevallos_CV_2026_en.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#1B2A4A] text-[#1B2A4A] text-sm font-bold tracking-widest hover:bg-[#1B2A4A] hover:text-white transition-all rounded-sm before:content-['['] after:content-[']'] before:text-[#E85D26] after:text-[#E85D26] before:font-black after:font-black"
              >
                CV
              </a>
              <a
                href="https://linkedin.com/in/juanfcval"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#2D4A6E] text-[#2D4A6E] text-sm font-bold tracking-widest hover:bg-[#2D4A6E] hover:text-white transition-all rounded-sm before:content-['['] after:content-[']'] before:text-[#E85D26] after:text-[#E85D26] before:font-black after:font-black"
              >
                LINKEDIN
              </a>
              <a
                href="mailto:juanfcval@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 border-2 border-[#E85D26] text-[#E85D26] text-sm font-bold tracking-widest hover:bg-[#E85D26] hover:text-white transition-all rounded-sm before:content-['['] after:content-[']'] before:text-[#1B2A4A] after:text-[#1B2A4A] before:font-black after:font-black"
              >
                EMAIL
              </a>
            </div>

            <div className="flex flex-wrap gap-6 mt-4 pt-4 border-t border-slate-200 items-center">
              <div className="text-center">
                <div className="text-2xl font-black text-[#1B2A4A]">5+</div>
                <div className="text-xs text-slate-500 tracking-wider uppercase mt-0.5">Years Exp.</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-[#1B2A4A]">2</div>
                <div className="text-xs text-slate-500 tracking-wider uppercase mt-0.5">Teams Led</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-black text-[#E85D26]">+10k</div>
                <div className="text-xs text-slate-500 tracking-wider uppercase mt-0.5">Users Served</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
