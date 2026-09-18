import { Link } from "react-router-dom";
import { servicesBlurb, stats } from "../../data/site";
import { img } from "../../config/media";
import ParallaxSection from "../common/ParallaxSection";
import Reveal from "../common/Reveal";
import Counter from "../common/Counter";
import { ArrowRight } from "../common/Icons";

export default function ServicesSection() {
  return (
    <ParallaxSection image="/assets/img/slider/slider-2.jpg" className="section on-dark" strength={70}>
      <div className="container">
        <div className="services-grid">
          <Reveal>
            <span className="eyebrow">{servicesBlurb.eyebrow}</span>
            <h2 className="section-title">{servicesBlurb.title}</h2>
            <p className="lead">{servicesBlurb.body}</p>
            <Link className="btn" to="/services/turnkey-projects" style={{ marginTop: "1.4rem" }}>
              Explore Services <ArrowRight className="arrow" width={18} height={18} />
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <img src={img(servicesBlurb.image)} alt="Our services" loading="lazy" />
          </Reveal>
        </div>

        <div className="lane-rule" style={{ margin: "3rem 0" }} />

        <div className="stats">
          {stats.map((s) => (
            <Reveal className="stat" key={s.label}>
              <Counter value={s.value} suffix={s.suffix} />
              <div className="stat__label">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </ParallaxSection>
  );
}
