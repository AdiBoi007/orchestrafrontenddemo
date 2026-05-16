import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `nav__link${isActive ? " nav__link--active" : ""}`;

  const mobileNavLinkClass = ({ isActive }) =>
    `mobile-nav__link${isActive ? " mobile-nav__link--active" : ""}`;

  return (
    <header
      className={`site-header${scrolled ? " is-scrolled" : ""}`}
      data-header
    >
      <div className="shell header__inner">
        <Link className="logo" to="/">
          <img
            className="logo__mark"
            src="/orchestra-logo.png"
            alt=""
            width={28}
            height={28}
            decoding="async"
          />
          <span className="logo__text">Orchestra</span>
        </Link>
        <nav className="nav nav--desktop" aria-label="Primary">
          <NavLink className={navLinkClass} to="/integrations">
            Integrations
          </NavLink>
          <NavLink className={navLinkClass} to="/pricing">
            Pricing
          </NavLink>
          <Link className="nav__link" to={{ pathname: "/", hash: "demo" }}>
            Book demo
          </Link>
          <a className="nav__link" href="#">
            Sign in
          </a>
          <Link className="nav__cta" to={{ pathname: "/", hash: "waitlist" }}>
            Join waitlist
          </Link>
        </nav>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((o) => !o)}
        >
          <span className="nav-toggle__bar" />
          <span className="nav-toggle__bar" />
        </button>
      </div>
      <div
        className={`mobile-nav${mobileOpen ? " is-open" : ""}`}
        id="mobile-nav"
        hidden={!mobileOpen}
      >
        <NavLink className={mobileNavLinkClass} to="/integrations" onClick={() => setMobileOpen(false)}>
          Integrations
        </NavLink>
        <NavLink className={mobileNavLinkClass} to="/pricing" onClick={() => setMobileOpen(false)}>
          Pricing
        </NavLink>
        <Link
          className="mobile-nav__link"
          to={{ pathname: "/", hash: "demo" }}
          onClick={() => setMobileOpen(false)}
        >
          Book demo
        </Link>
        <a className="mobile-nav__link" href="#" onClick={() => setMobileOpen(false)}>
          Sign in
        </a>
        <Link
          className="mobile-nav__cta"
          to={{ pathname: "/", hash: "waitlist" }}
          onClick={() => setMobileOpen(false)}
        >
          Join waitlist
        </Link>
      </div>
    </header>
  );
}
