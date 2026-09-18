import { intro } from "../../data/site";
import { img } from "../../config/media";
import Reveal from "../common/Reveal";

export default function AboutIntro() {
  return (
    <section className="section">
      <div className="container split">
        <Reveal>
          <span className="eyebrow">{intro.eyebrow}</span>
          <h2 className="section-title">{intro.title}</h2>
          <p className="lead">{intro.body}</p>
          <div className="pillars">
            {intro.pillars.map((p, i) => (
              <Reveal className="pillar" key={p.title} delay={i * 0.08}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>

        <Reveal className="split__media" delay={0.15}>
          <img src={img(intro.image)} alt="Equinox sports flooring project" loading="lazy" />
          <div className="badge">
            15+
            <span>Years of<br />experience</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
