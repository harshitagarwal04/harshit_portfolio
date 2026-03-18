import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { SystemsBuilt } from "@/components/sections/SystemsBuilt";
import { CaseStudy } from "@/components/sections/CaseStudy";
import { Architecture } from "@/components/sections/Architecture";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Philosophy } from "@/components/sections/Philosophy";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero />
      <About />
      <Experience />
      <SystemsBuilt />
      <CaseStudy />
      <Architecture />
      <Projects />
      <Skills />
      <Philosophy />
      <Contact />
      <Footer />
    </main>
  );
}