import PageBanner from "../components/detail/PageBanner";
import ServicesSection from "../components/home/ServicesSection";
import ClientsSection from "../components/home/ClientsSection";
import CTAStrip from "../components/common/CTAStrip";
import Reveal from "../components/common/Reveal";
import { intro } from "../data/site";
import { img } from "../config/media";

const values = [
  { title: "Quality First", text: "Highest standard of quality satisfaction in the sporting world — the factor that drives our growth." },
  { title: "Safety by Design", text: "Impact-absorbing, certified surfaces that reduce injury risk for players of every level." },
  { title: "Warranty Backed", text: "We provide warranty on all products and services, for stadiums, clubs, schools, offices and homes." },
  { title: "Turnkey Delivery", text: "From consultation and design to construction — one accountable team, start to finish." },
];

export default function About() {
  return (
    <>
      <PageBanner title="About Us" image="/assets/img/about/about.jpg" crumbs={[{ label: "About Us" }]} />

      <section className="section">
        <div className="container split">
          <Reveal>
            <span className="eyebrow">Welcome To</span>
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
            <img src={img(intro.image)} alt="About Equinox Sports Infra" loading="lazy" />
            <div className="badge">250+<span>Projects<br />delivered</span></div>
          </Reveal>
        </div>
      </section>

      <ServicesSection />

      <section className="section">
        <div className="container">
          <Reveal><span className="eyebrow">Why Equinox</span><h2 className="section-title">What We Stand For</h2></Reveal>
          <div className="gallery" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", marginTop: "2rem" }}>
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.08} className="tst" y={20}>
                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>{v.title}</h3>
                <p style={{ color: "var(--muted)" }}>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ClientsSection />
      <CTAStrip />
    </>
  );
}
