import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValue, animate, useReducedMotion } from "framer-motion";
import { img } from "../../config/media";
import HoverCard from "../common/HoverCard";
import { ArrowRight } from "../common/Icons";

const AUTOPLAY = 4500;

/**
 * ProjectsCarousel — draggable, autoplaying card slider (21st.dev-style
 * "card carousel" free effect). Cards peek at the viewport edges; drag with
 * the mouse/touch, or use the arrow/dot controls. Each card gets the
 * HoverCard spotlight + tilt effect.
 */
export default function ProjectsCarousel({ projects }) {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const reduce = useReducedMotion();

  const [index, setIndex] = useState(0);
  const [maxOffset, setMaxOffset] = useState(0);
  const [step, setStep] = useState(0);
  const paused = useRef(false);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    const card = cardRef.current;
    if (!viewport || !track || !card) return;
    const cardWidth = card.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || "0");
    setStep(cardWidth + gap);
    setMaxOffset(Math.max(0, track.scrollWidth - viewport.clientWidth));
  }, []);

  useLayoutEffect(() => {
    measure();
    const ro = new ResizeObserver(measure);
    if (viewportRef.current) ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, [measure, projects.length]);

  const offsetFor = useCallback((i) => Math.min(i * step, maxOffset), [step, maxOffset]);

  const goTo = useCallback(
    (i) => {
      const clamped = Math.max(0, Math.min(i, projects.length - 1));
      setIndex(clamped);
      animate(x, -offsetFor(clamped), { type: "spring", stiffness: 260, damping: 32 });
    },
    [x, offsetFor, projects.length]
  );

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      if (paused.current) return;
      setIndex((i) => {
        const next = (i + 1) % projects.length;
        animate(x, -offsetFor(next), { type: "spring", stiffness: 260, damping: 32 });
        return next;
      });
    }, AUTOPLAY);
    return () => clearInterval(id);
  }, [reduce, x, offsetFor, projects.length]);

  const handleDragEnd = (_, info) => {
    const current = x.get();
    const nearest = Math.round(-current / (step || 1));
    const bias = info.velocity.x < -300 ? 1 : info.velocity.x > 300 ? -1 : 0;
    goTo(nearest + bias);
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocus={() => (paused.current = true)}
      onBlur={() => (paused.current = false)}
    >
      <div className="carousel__viewport" ref={viewportRef}>
        <motion.div
          className="carousel__track"
          ref={trackRef}
          style={{ x }}
          drag={maxOffset > 0 ? "x" : false}
          dragConstraints={{ left: -maxOffset, right: 0 }}
          dragElastic={0.12}
          onDragEnd={handleDragEnd}
        >
          {projects.map((p, i) => (
            <div className="carousel__card" key={p.id} ref={i === 0 ? cardRef : undefined}>
              <HoverCard className="gallery__item">
                <img src={img(p.image)} alt={`Equinox project ${p.id}`} loading="lazy" draggable={false} />
                <span className="tag">
                  Equinox Project <ArrowRight width={14} height={14} />
                </span>
              </HoverCard>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="carousel__controls">
        <button className="carousel__arrow" onClick={() => goTo(index - 1)} aria-label="Previous project">
          <ArrowRight style={{ transform: "rotate(180deg)" }} />
        </button>
        <div className="carousel__dots">
          {projects.map((p, i) => (
            <button
              key={p.id}
              className={`carousel__dot ${i === index ? "is-active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
        <button className="carousel__arrow" onClick={() => goTo(index + 1)} aria-label="Next project">
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
