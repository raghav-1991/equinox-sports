import { testimonials } from "../../data/site";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import HoverCard from "../common/HoverCard";

export default function TestimonialsSection() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow="What Clients Say"
          title="Testimonials"
          lead="Trusted by clubs, schools and facility owners across Bangalore and beyond."
          align="center"
        />
        <div className="tst-grid" style={{ marginTop: "2.5rem" }}>
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <HoverCard className="tst" tilt={false}>
                <div className="tst__quote" aria-hidden="true">&ldquo;</div>
                <p className="tst__text">{t.text}</p>
                <div className="tst__name">{t.name}</div>
                <div className="tst__place">{t.place}</div>
              </HoverCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
