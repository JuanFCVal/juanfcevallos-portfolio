import Header from "@/components/header/Header";
import Hero from "@/components/hero/Hero";
import Narrative from "@/components/narrative/Narrative";
import Leadership from "@/components/leadership/Leadership";
import Architecture from "@/components/architecture/Architecture";
import TikTok from "@/components/tiktok/TikTok";
import BentoBox from "@/components/bento/BentoBox";
import Contact from "@/components/contact/Contact";

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
