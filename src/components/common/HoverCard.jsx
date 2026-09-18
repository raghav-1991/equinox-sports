import { useRef } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * HoverCard — cursor-tracked spotlight glow, with an optional subtle 3D tilt.
 * Position is written straight to the DOM via a ref (not React state) so the
 * glow/tilt stay smooth at 60fps without re-rendering on every mousemove.
 *
 * props: tilt (default true), as (element), className, ...rest
 */
export default function HoverCard({ children, tilt = true, as = "div", className = "", ...rest }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const Tag = as;

  const handleMove = (e) => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.setProperty("--my", `${py * 100}%`);
    if (tilt) {
      const rx = (0.5 - py) * 10;
      const ry = (px - 0.5) * 10;
      el.style.setProperty("--rx", `${rx}deg`);
      el.style.setProperty("--ry", `${ry}deg`);
    }
  };

  const handleLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <Tag
      ref={ref}
      className={`hover-card ${tilt ? "hover-card--tilt" : ""} ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...rest}
    >
      {children}
    </Tag>
  );
}
