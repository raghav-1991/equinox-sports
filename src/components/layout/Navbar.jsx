import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { company, navigation } from "../../data/site";
import { img } from "../../config/media";
import { Phone, Mail, Chevron, social } from "../common/Icons";

// Blue wordmark used in the header on every page except Home (which keeps the
// original mark, styled white while the header floats transparent over the hero).
const NAV_LOGO_BLUE = "/logo-blue.png";

// A plain div (positioning context for the floated transparent header) when
// transparent, otherwise a no-op Fragment so <header> sits directly under its
// full-height ancestor — required for position:sticky to have room to stick.
function HeaderWrap({ transparent, children }) {
  if (!transparent) return <>{children}</>;
  return <div className="header-wrap">{children}</div>;
}

function LogoText() {
  // Text fallback if the logo image fails to load.
  return (
    <span className="fallback">
      Equinox<span>.</span>
    </span>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // mobile drawer
  const [expanded, setExpanded] = useState(null); // mobile accordion group
  const [logoOk, setLogoOk] = useState(true);
  const location = useLocation();

  // The header floats transparent over the home page's hero until the user
  // scrolls, or the mobile drawer is open (needs a solid backdrop to read).
  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled && !open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close drawer on navigation
  useEffect(() => {
    setOpen(false);
    setExpanded(null);
  }, [location.pathname]);

  // Lock scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  return (
    <>
      {/* Top contact bar */}
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="topbar__contact">
            <a href={company.phoneHref}><Phone width={15} height={15} style={{ display: "inline", verticalAlign: "-3px", marginRight: 6 }} />{company.phone}</a>
            <a href={`mailto:${company.email}`}><Mail width={15} height={15} style={{ display: "inline", verticalAlign: "-3px", marginRight: 6 }} />{company.email}</a>
          </div>
          <div className="topbar__social">
            {company.social.map((s) => {
              const Ic = social[s.label];
              return (
                <a key={s.label} href={s.href} aria-label={s.label}>{Ic ? <Ic /> : s.label}</a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main header.
          Only wrapped in a positioning div while transparent+absolute (floating
          over the hero) — position:sticky needs its parent to be taller than
          itself to have room to stick, so the wrapper must not be present once
          the header goes back to position:sticky, or sticking breaks entirely. */}
      <HeaderWrap transparent={transparent}>
        <header className={`header ${scrolled ? "header--scrolled" : ""} ${transparent ? "header--transparent" : ""}`}>
          <nav className="container nav" aria-label="Primary">
            <Link to="/" className="nav__logo" aria-label={company.name}>
              {logoOk ? (
                <img
                  src={isHome ? img(company.logo) : img(NAV_LOGO_BLUE)}
                  alt={company.name}
                  className={isHome ? "" : "nav__logo-img--blue"}
                  onError={() => setLogoOk(false)}
                />
              ) : (
                <LogoText />
              )}
            </Link>

            <ul className="nav__menu">
              {navigation.map((item) =>
                item.children ? (
                  <li key={item.label} className="nav__item nav__item--has-children">
                    <button className="nav__link" aria-haspopup="true">
                      {item.label}
                      <Chevron className="nav__caret" />
                    </button>
                    <div className="nav__dropdown">
                      {item.children.map((c) => (
                        <NavLink key={c.to} to={c.to} className={({ isActive }) => (isActive ? "is-active" : "")}>
                          {c.label}
                        </NavLink>
                      ))}
                    </div>
                  </li>
                ) : (
                  <li key={item.label} className="nav__item">
                    <NavLink to={item.to} end={item.to === "/"} className={({ isActive }) => `nav__link ${isActive ? "is-active" : ""}`}>
                      {item.label}
                    </NavLink>
                  </li>
                )
              )}
            </ul>

            <button
              className={`nav__toggle ${open ? "is-open" : ""}`}
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span></span><span></span><span></span>
            </button>
          </nav>
        </header>
      </HeaderWrap>

      {/* Mobile drawer */}
      <div className={`scrim ${open ? "is-open" : ""}`} onClick={() => setOpen(false)} />
      <aside className={`mobile-menu ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="mobile-menu__head">
          <Link to="/" className="nav__logo"><LogoText /></Link>
          <button className="mobile-menu__close" onClick={() => setOpen(false)} aria-label="Close menu">&times;</button>
        </div>

        {navigation.map((item) =>
          item.children ? (
            <div key={item.label} className={`m-group ${expanded === item.label ? "is-open" : ""}`}>
              <button
                className="m-group__head"
                onClick={() => setExpanded((e) => (e === item.label ? null : item.label))}
                aria-expanded={expanded === item.label}
              >
                {item.label}
                <Chevron className="caret" />
              </button>
              <div className="m-group__panel" style={{ height: expanded === item.label ? "auto" : 0 }}>
                {item.children.map((c) => (
                  <NavLink key={c.to} to={c.to}>{c.label}</NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink key={item.label} to={item.to} end={item.to === "/"} className="m-link">
              {item.label}
            </NavLink>
          )
        )}
      </aside>
    </>
  );
}
