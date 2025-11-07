import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Education from "@/components/education";
// import Blog from "@/components/blog";
import Contact from "@/components/contact";
import Certifications from "@/components/certifications";

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      {/* <Blog /> */}
      <Contact />
    </>
  );
}
