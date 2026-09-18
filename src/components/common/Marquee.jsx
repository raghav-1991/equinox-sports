import { useReducedMotion } from "framer-motion";

/**
 * Marquee — infinite auto-scrolling row. Duplicates its children once so the
 * CSS translateX loop is seamless; pauses on hover; static (no animation)
 * when the user prefers reduced motion.
 *
 * props: speed (seconds for one full loop, default 28), className
 */
export default function Marquee({ children, speed = 28, className = "" }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className="marquee marquee--static">
        <div className={`marquee__group ${className}`}>{children}</div>
      </div>
    );
  }

  return (
    <div className="marquee">
      <div className="marquee__track" style={{ animationDuration: `${speed}s` }}>
        <div className={`marquee__group ${className}`}>{children}</div>
        <div className={`marquee__group ${className}`} aria-hidden="true">{children}</div>
      </div>
    </div>
  );
}
