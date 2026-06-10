import Header from "@/components/header/Header";
import KonamiCode from "@/components/easter-egg/KonamiCode";
import Hero from "@/components/hero/Hero";
import TechMarquee from "@/components/marquee/TechMarquee";
import Narrative from "@/components/narrative/Narrative";
import Leadership from "@/components/leadership/Leadership";
import Projects from "@/components/projects/Projects";
import Architecture from "@/components/architecture/Architecture";
import TikTok from "@/components/tiktok/TikTok";
import BentoBox from "@/components/bento/BentoBox";
import Contact from "@/components/contact/Contact";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <TechMarquee />
      <Narrative />
      <div id="work">
        <Leadership />
        <Projects />
        <Architecture />
      </div>
      <TikTok />
      <Contact />
      <KonamiCode />
    </main>
  );
}
