import Reveal from "./Reveal";

// Consistent eyebrow + title + optional lead block.
export default function SectionHeading({ eyebrow, title, lead, align = "left", max }) {
  return (
    <Reveal
      className="section-heading"
      style={{
        textAlign: align,
        maxWidth: max || (align === "center" ? "760px" : undefined),
        marginInline: align === "center" ? "auto" : undefined,
      }}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title">{title}</h2>
      {lead && <p className="lead" style={{ marginInline: align === "center" ? "auto" : undefined }}>{lead}</p>}
    </Reveal>
  );
}
