import { Navigate, useParams, Link } from "react-router-dom";
import { pages, categoryLabels } from "../data/pages";
import { company } from "../data/site";
import { img } from "../config/media";
import PageBanner from "../components/detail/PageBanner";
import CTAStrip from "../components/common/CTAStrip";
import Reveal from "../components/common/Reveal";
import { Check, ArrowRight, Phone } from "../components/common/Icons";

export default function DetailPage() {
  const { category, slug } = useParams();
  const page = pages[slug];

  // Guard: unknown slug, or slug that doesn't belong to this category.
  if (!page || page.category !== category) {
    return <Navigate to="/404" replace />;
  }

  const label = categoryLabels[category];

  // Sibling pages in the same category for the "related" list.
  const related = Object.entries(pages)
    .filter(([s, p]) => p.category === category && s !== slug)
    .slice(0, 6)
    .map(([s, p]) => ({ slug: s, title: p.title }));

  return (
    <>
      <PageBanner
        title={page.title}
        image={page.image}
        crumbs={[{ label }, { label: page.title }]}
      />

      <section className="section">
        <div className="container detail__intro">
          {/* Main column */}
          <div>
            <Reveal>
              <span className="eyebrow">{label}</span>
              <h2 className="section-title" style={{ marginTop: "0.5rem" }}>{page.title}</h2>
              {page.intro.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
              {page.placeholder && (
                <p className="placeholder-note">
                  Note: this page uses placeholder copy — the original page was unavailable.
                  Replace this text with your final content.
                </p>
              )}
            </Reveal>

            {page.sections?.map((sec, i) => (
              <Reveal className="detail__section" key={i} delay={0.05}>
                <h2>{sec.heading}</h2>
                {sec.sub && <div className="sub">{sec.sub}</div>}
                {sec.list && (
                  <ul className={`check-list ${sec.columns ? "columns" : ""}`}>
                    {sec.list.map((item, j) => (
                      <li key={j}>
                        <span className="tick"><Check /></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}

            {page.table && (
              <Reveal className="detail__section">
                <h2>Technical Details</h2>
                <div className="spec-table-wrap">
                  <table className="spec-table">
                    <thead>
                      <tr>
                        {page.table.head.map((h, i) => (
                          <th key={i}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {page.table.rows.map((row, i) => (
                        <tr key={i}>
                          {row.map((cell, j) => (
                            <td key={j}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
            )}
          </div>

          {/* Sidebar: feature image + enquiry + related */}
          <aside className="detail__media">
            <img src={img(page.image)} alt={page.title} loading="lazy" />

            <div className="detail__aside">
              <h3>Interested in {page.title}?</h3>
              <p>Get pricing, specs and a site assessment from our team.</p>
              <div style={{ display: "grid", gap: "0.7rem" }}>
                <Link className="btn" to="/contact" style={{ justifyContent: "center" }}>
                  Enquire Now <ArrowRight className="arrow" width={18} height={18} />
                </Link>
                <a className="btn btn--green" href={company.phoneHref} style={{ justifyContent: "center" }}>
                  <Phone width={18} height={18} /> {company.phone}
                </a>
              </div>
            </div>

            {related.length > 0 && (
              <div style={{ marginTop: "1.6rem" }}>
                <h3 style={{ fontSize: "1.1rem", marginBottom: "0.4rem" }}>More in {label}</h3>
                <div className="related">
                  {related.map((r) => (
                    <Link key={r.slug} to={`/${category}/${r.slug}`}>
                      {r.title} <ArrowRight width={16} height={16} />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      <CTAStrip title={`Build your ${page.title.toLowerCase()} with Equinox`} />
    </>
  );
}
