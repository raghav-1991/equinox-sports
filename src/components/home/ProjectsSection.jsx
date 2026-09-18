import { projects } from "../../data/site";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import ProjectsCarousel from "./ProjectsCarousel";

export default function ProjectsSection() {
  return (
    <section className="section" id="gallery" style={{ background: "var(--paper-2)" }}>
      <div className="container">
        <SectionHeading
          eyebrow="Our Work"
          title="Our Projects"
          lead="A selection of turf, court and track installations delivered by our team."
          align="center"
        />
        <Reveal style={{ marginTop: "2.5rem" }}>
          <ProjectsCarousel projects={projects} />
        </Reveal>
      </div>
    </section>
  );
}
