import { Link } from "react-router-dom";
import { company } from "../../data/site";
import Reveal from "./Reveal";
import { ArrowRight, Phone } from "./Icons";

// Reusable CTA band shown near the bottom of pages.
export default function CTAStrip({
  title = "Planning a sports facility?",
  text = "Tell us about your project — turf, track, court or complete turnkey build.",
}) {
  return (
    <section className="section--tight">
      <div className="container">
        <Reveal className="cta-strip">
          <div>
            <h2>{title}</h2>
            <p className="on-dark" style={{ marginTop: "0.6rem" }}>{text}</p>
          </div>
          <div style={{ display: "flex", gap: "0.8rem", flexWrap: "wrap" }}>
            <Link className="btn" to="/contact">Get a Quote <ArrowRight className="arrow" width={18} height={18} /></Link>
            <a className="btn btn--ghost" href={company.phoneHref}><Phone width={18} height={18} /> Call Us</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
