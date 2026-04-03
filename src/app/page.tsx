import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Narrative from "@/components/Narrative";
import Leadership from "@/components/Leadership";
import Architecture from "@/components/Architecture";
import TikTok from "@/components/TikTok";
import BentoBox from "@/components/BentoBox";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main>
      <Header />
      <Hero />
      <Narrative />
      <div id="work">
        <Leadership />
        <Architecture />
      </div>
      <TikTok />
      <BentoBox />
      <Contact />
    </main>
  );
}
