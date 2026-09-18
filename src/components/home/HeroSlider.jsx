import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { heroSlides } from "../../data/site";
import { img } from "../../config/media";
import { ArrowRight } from "../common/Icons";

const AUTOPLAY = 6000;

export default function HeroSlider() {
  const [index, setIndex] = useState(0);
  const timer = useRef(null);
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  const go = useCallback((i) => setIndex((i + heroSlides.length) % heroSlides.length), []);

  useEffect(() => {
    if (reduce) return;
    timer.current = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), AUTOPLAY);
    return () => clearInterval(timer.current);
  }, [reduce]);

  const restart = () => {
    if (timer.current) clearInterval(timer.current);
    if (!reduce) timer.current = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), AUTOPLAY);
  };

  const slide = heroSlides[index];

  return (
    <section className="hero" ref={ref} aria-roledescription="carousel">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={index}
          className="hero__slide"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
        >
          <motion.div
            className="hero__bg"
            style={{ backgroundImage: `url(${img(slide.image)})`, y: reduce ? 0 : bgY }}
            initial={{ scale: 1.14 }}
            animate={{ scale: 1.03 }}
            transition={{ duration: 7, ease: "easeOut" }}
          />
          <div className="container hero__content">
            <motion.span
              className="hero__eyebrow"
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}
            >
              {slide.eyebrow}
            </motion.span>
            <motion.h1
              className="hero__title"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
            >
              {slide.title}
            </motion.h1>
            <motion.p
              className="hero__text"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
            >
              {slide.text}
            </motion.p>
            {slide.cta && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }}>
                <Link className="btn" to={slide.cta.to}>
                  {slide.cta.label} <ArrowRight className="arrow" width={18} height={18} />
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="hero__arrows">
        <button className="hero__arrow" onClick={() => { go(index - 1); restart(); }} aria-label="Previous slide">
          <ArrowRight style={{ transform: "rotate(180deg)" }} />
        </button>
        <button className="hero__arrow" onClick={() => { go(index + 1); restart(); }} aria-label="Next slide">
          <ArrowRight />
        </button>
      </div>

      <div className="hero__dots">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === index ? "is-active" : ""}`}
            onClick={() => { go(i); restart(); }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
