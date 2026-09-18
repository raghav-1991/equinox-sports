import { motion, useReducedMotion } from "framer-motion";

/**
 * Reveal — a light scroll-in animation wrapper.
 * Fades + slides content into view once. Used sparingly so it feels
 * intentional rather than "everything slides up".
 *
 * props: as (element), delay, y (offset), once, ...rest
 */
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 26,
  once = true,
  className,
  ...rest
}) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduce) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}
