import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { img } from "../../config/media";

/**
 * PageBanner — parallax hero used on About, Contact and every detail page.
 * props: title, image, crumbs [{label, to?}]
 */
export default function PageBanner({ title, image, crumbs = [] }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "18%"]);

  return (
    <section className="banner" ref={ref}>
      <motion.div
        className="banner__bg"
        style={{ backgroundImage: `url(${img(image)})`, y: reduce ? 0 : y }}
        aria-hidden="true"
      />
      <div className="banner__overlay" aria-hidden="true" />
      <div className="container">
        <nav className="banner__crumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          {crumbs.map((c, i) => (
            <span key={i} style={{ display: "inline-flex", gap: "0.5rem", alignItems: "center" }}>
              <span className="sep">/</span>
              {c.to ? <Link to={c.to}>{c.label}</Link> : <span>{c.label}</span>}
            </span>
          ))}
        </nav>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}
