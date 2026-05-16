import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer__grid">
        <div className="footer__brand">
          <Link className="logo logo--footer" to="/">
            <img
              className="logo__mark"
              src="/orchestra-logo.png"
              alt=""
              width={24}
              height={24}
              decoding="async"
            />
            <span className="logo__text">Orchestra</span>
          </Link>
          <p className="footer__tag">Support © Orchestra AI Company</p>
        </div>
        <div className="footer__cols">
          <div className="footer__col">
            <p className="footer__heading">Company</p>
            <Link to="/">Home</Link>
            <Link to="/pricing">Pricing</Link>
            <Link to={{ pathname: "/", hash: "waitlist" }}>Waitlist</Link>
            <Link to={{ pathname: "/", hash: "demo" }}>Book demo</Link>
            <Link to="/">About us</Link>
            <Link to={{ pathname: "/", hash: "flow" }}>Guides</Link>
            <Link to={{ pathname: "/", hash: "product" }}>Notes</Link>
            <Link to="/integrations">Integrations</Link>
          </div>
          <div className="footer__col">
            <p className="footer__heading">Docs</p>
            <Link to="/pricing">For startups</Link>
            <Link to="/pricing">Security</Link>
            <span className="footer__placeholder">Privacy policy</span>
          </div>
          <div className="footer__col">
            <p className="footer__heading">Contact</p>
            <Link to={{ pathname: "/", hash: "demo" }}>Support</Link>
            <p className="footer__badge">AICPA SOC</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
