import { clients } from "../../data/site";
import { img } from "../../config/media";
import SectionHeading from "../common/SectionHeading";
import Reveal from "../common/Reveal";
import Marquee from "../common/Marquee";

export default function ClientsSection() {
  return (
    <section className="section" id="clients">
      <div className="container">
        <SectionHeading eyebrow="Trusted By" title="Our Clients" align="center" />
        <Reveal style={{ marginTop: "2.5rem" }}>
          <Marquee className="clients-track">
            {clients.map((src, i) => (
              <img key={i} src={img(src)} alt={`Client ${i + 1}`} loading="lazy" />
            ))}
          </Marquee>
        </Reveal>
      </div>
    </section>
  );
}
