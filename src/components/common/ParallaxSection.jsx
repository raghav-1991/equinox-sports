import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { img } from "../../config/media";

/**
 * ParallaxSection — a full-width band whose background image drifts as the
 * user scrolls, creating depth. Used on every major section per the brief.
 *
 * props:
 *   image     relative image path (resolved via img())
 *   strength  parallax travel in px (default 90)
 *   overlay   show the dark gradient overlay (default true)
 *   className extra classes for the <section>
 */
export default function ParallaxSection({
  image,
  strength = 90,
  overlay = true,
  className = "",
  children,
  ...rest
}) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <section ref={ref} className={`parallax ${className}`} {...rest}>
      <motion.div
        className="parallax__bg"
        style={{
          backgroundImage: `url(${img(image)})`,
          y: reduce ? 0 : y,
        }}
        aria-hidden="true"
      />
      {overlay && <div className="parallax__overlay" aria-hidden="true" />}
      {children}
    </section>
  );
}
