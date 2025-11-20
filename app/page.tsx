import Hero from "@/components/hero";
import Contact from "@/components/contact";
import { Education, Certifications } from "@/components/education_and_certifications";
import { Projects, Skills } from "@/components/skills_and_projects";

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
