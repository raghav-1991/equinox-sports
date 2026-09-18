import { useState } from "react";
import { Link } from "react-router-dom";
import { company, footerSports, navigation } from "../../data/site";
import { img } from "../../config/media";
import { Phone, Mail, Pin, social } from "../common/Icons";

export default function Footer() {
  const [logoOk, setLogoOk] = useState(true);
  const products = navigation.find((n) => n.label === "Products").children.slice(0, 6);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          {/* Brand + about */}
          <div>
            <div className="footer__logo">
              {logoOk ? (
                <img src={img(company.logoWhite)} alt={company.name} onError={() => setLogoOk(false)} />
              ) : (
                <div className="fallback">Equinox<span>.</span></div>
              )}
            </div>
            <p style={{ color: "rgba(255,255,255,0.7)" }}>
              We provide warranty on all our products and services to ensure the best experience for
              our users and clients. Our flooring options are suitable for stadiums, clubs, schools,
              offices and homes.
            </p>
            <div className="footer__social">
              {company.social.map((s) => {
                const Ic = social[s.label];
                return (
                  <a key={s.label} href={s.href} aria-label={s.label}>{Ic ? <Ic /> : s.label[0]}</a>
                );
              })}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4>Products</h4>
            <div className="footer__links">
              {products.map((p) => (
                <Link key={p.to} to={p.to}>{p.label}</Link>
              ))}
            </div>
          </div>

          {/* Sports */}
          <div>
            <h4>Sports</h4>
            <div className="footer__links">
              {footerSports.slice(0, 6).map((s) => (
                <Link key={s.to} to={s.to}>{s.label}</Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4>Contact Us</h4>
            <ul className="footer__contact">
              <li><span className="ic"><Pin width={18} height={18} /></span><span>{company.address}</span></li>
              <li><span className="ic"><Phone width={18} height={18} /></span><a href={company.phoneHref}>{company.phone}</a></li>
              <li><span className="ic"><Mail width={18} height={18} /></span><a href={`mailto:${company.email}`}>{company.email}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {company.copyrightYear} {company.name}. All rights reserved.</span>
          <span>Redefining Safety.</span>
        </div>
      </div>
    </footer>
  );
}
