import Hero from "@/components/hero";
import Contact from "@/components/contact";
import  Projects from "@/components/projects";
import Skills from "@/components/skills";
import Certifications from "@/components/certifications";
import Education from "@/components/education";
import CodingAdventures from "@/components/coding-adventures";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
      <CodingAdventures/>
    </>
  );
}
