import { useEffect, useState } from "react";
import { company } from "../../data/site";
import { WhatsApp, Phone, ArrowUp } from "./Icons";

// Fixed WhatsApp / Call / Back-to-top buttons.
export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fab">
      <a className="wa" href={company.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <WhatsApp />
      </a>
      <a className="call" href={company.phoneHref} aria-label="Call us">
        <Phone />
      </a>
      <button
        className={`top ${showTop ? "show" : ""}`}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <ArrowUp />
      </button>
    </div>
  );
}
