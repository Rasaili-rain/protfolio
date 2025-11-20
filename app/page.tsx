import Hero from "@/components/hero";
import Contact from "@/components/contact";
import  Projects from "@/components/projects";
import Skills from "@/components/skills";
import Certifications from "@/components/certifications";
import Education from "@/components/education";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </>
  );
}
