import { Link } from "react-router-dom";
import { ArrowRight } from "../components/common/Icons";

export default function NotFound() {
  return (
    <section className="section notfound">
      <div className="container">
        <div className="code">404</div>
        <h2 style={{ fontSize: "1.8rem", marginBottom: "0.6rem" }}>Page not found</h2>
        <p className="lead" style={{ marginInline: "auto", marginBottom: "1.5rem" }}>
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>
        <Link className="btn" to="/">Back to Home <ArrowRight className="arrow" width={18} height={18} /></Link>
      </div>
    </section>
  );
}
