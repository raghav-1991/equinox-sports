import { useState } from "react";
import PageBanner from "../components/detail/PageBanner";
import Reveal from "../components/common/Reveal";
import { company } from "../data/site";
import { Phone, Mail, Pin, ArrowRight } from "../components/common/Icons";
import HoverCard from "../components/common/HoverCard";

const initial = { name: "", email: "", phone: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initial);
  const [sent, setSent] = useState(false);

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    // No backend in this static build — hand off to the user's mail client.
    const body = `Name: ${form.name}%0DEmail: ${form.email}%0DPhone: ${form.phone}%0D%0D${form.message}`;
    window.location.href = `mailto:${company.email}?subject=${encodeURIComponent(
      form.subject || "Website enquiry"
    )}&body=${body}`;
    setSent(true);
  };

  return (
    <>
      <PageBanner title="Contact Us" image="/assets/img/slider/slider-3.jpg" crumbs={[{ label: "Contact Us" }]} />

      <section className="section">
        <div className="container contact-grid">
          {/* Left: contact info */}
          <Reveal>
            <span className="eyebrow">Contact Info</span>
            <h2 className="section-title">Get In Touch</h2>
            <p className="lead" style={{ marginBottom: "1.6rem" }}>
              Have a project in mind? Reach out and our team will help you plan the right surface,
              court or turnkey facility.
            </p>
            <div className="contact-cards">
              <HoverCard className="contact-card" tilt={false}>
                <span className="ic"><Mail /></span>
                <div>
                  <h4>Mail Here</h4>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </HoverCard>
              <HoverCard className="contact-card" tilt={false}>
                <span className="ic"><Pin /></span>
                <div>
                  <h4>Visit Here</h4>
                  <p>{company.address}</p>
                </div>
              </HoverCard>
              <HoverCard className="contact-card" tilt={false}>
                <span className="ic"><Phone /></span>
                <div>
                  <h4>Call Here</h4>
                  <a href={company.phoneHref}>{company.phone}</a>
                </div>
              </HoverCard>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.12}>
            <div className="form">
              <span className="eyebrow">Message Us</span>
              <h2 className="section-title" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>
                Don&rsquo;t Hesitate To Contact Us
              </h2>
              <form onSubmit={submit}>
                <div className="form__row">
                  <div className="field">
                    <label htmlFor="name">Your Name</label>
                    <input id="name" name="name" value={form.name} onChange={update} required placeholder="Full name" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" value={form.email} onChange={update} required placeholder="you@email.com" />
                  </div>
                </div>
                <div className="form__row">
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" value={form.phone} onChange={update} placeholder="+91…" />
                  </div>
                  <div className="field">
                    <label htmlFor="subject">Subject</label>
                    <input id="subject" name="subject" value={form.subject} onChange={update} placeholder="e.g. Football turf enquiry" />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" value={form.message} onChange={update} required placeholder="Tell us about your project…" />
                </div>
                <button className="btn" type="submit">
                  Send Message <ArrowRight className="arrow" width={18} height={18} />
                </button>
                {sent && (
                  <div className="form__success">
                    Thanks! Your email draft is ready — send it and we&rsquo;ll get back to you shortly.
                  </div>
                )}
                <p className="form__note">
                  Prefer to talk now? Call <a href={company.phoneHref}>{company.phone}</a>.
                </p>
              </form>
            </div>
          </Reveal>
        </div>

        <div className="container">
          <div className="map-embed">
            <iframe
              title="Equinox Sports Infra location"
              src="https://www.google.com/maps?q=Koramangala%201st%20Block%2C%20Bangalore%20560034&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
