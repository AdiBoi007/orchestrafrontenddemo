import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BookingSection } from "../components/BookingSection.jsx";
import { RevealSection } from "../components/RevealSection.jsx";

function PlanCta({ plan }) {
  const className = `btn pricing-tier__cta${plan.featured ? " btn--primary" : " btn--ghost pricing-tier__cta--outline"}`;

  if (plan.href.startsWith("/")) {
    const hash = plan.href.includes("#") ? plan.href.split("#")[1] : "";
    return (
      <Link className={className} to={{ pathname: "/", hash }}>
        {plan.cta}
      </Link>
    );
  }

  return (
    <a className={className} href={plan.href}>
      {plan.cta}
    </a>
  );
}

function Check() {
  return (
    <svg className="pricing-check" viewBox="0 0 16 16" fill="none" aria-hidden>
      <path
        d="M3.5 8.2 6.4 11l6.1-6.1"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const STARTER = {
  name: "Starter",
  blurb: "Best for those who want to understand and document their codebase. Up to 3 users.",
  priceLabel: "Free",
  period: null,
  note: null,
  cta: "Join waitlist",
  href: "/#waitlist",
  featured: false,
  features: [
    "Code as context with GitHub integration",
    "Automatically generate 1 doc set",
    "Ask questions in Slack",
    "Linear integration",
    "Answer engine connected to your code",
    "1-click doc organization",
    "AI-powered writing editor",
    "Basic usage limits",
  ],
};

const ENTERPRISE = {
  name: "Enterprise",
  blurb: "For organizations with large codebases and content sources.",
  priceLabel: "Custom",
  period: null,
  note: null,
  cta: "Book a demo",
  href: "/#demo",
  featured: false,
  features: [
    "Everything in Pro tier",
    "SSO",
    "Priority support with SLA",
    "SAML",
    "White-glove migration",
    "Self-hosted option",
    "Help center integrations",
    "Custom usage limits",
  ],
};

function proPlan(billing) {
  const annual = billing === "annual";
  return {
    name: "Pro",
    blurb:
      "Best for those with existing content sources who want better accuracy and tooling. Up to 10 users.",
    price: annual ? "20" : "25",
    period: annual ? "Per user/month, billed annually" : "Per user/month, billed monthly",
    note: annual ? "One month free on annual billing" : null,
    ribbon: annual ? "One month free" : null,
    cta: "Join waitlist",
    href: "/#waitlist",
    featured: true,
    features: [
      "Everything in Starter tier",
      "Automatically generate multiple doc sets",
      "Update docs automatically",
      "Google Drive integration",
      "Confluence integration",
      "Write docs from Slack",
      "Automatically organize your docs",
      "Orchestra MCP",
      "API and webhooks for automations",
      "Bring your own model provider key",
      "Access to beta features",
      "5x usage limits",
    ],
  };
}

export function PricingPage() {
  const [billing, setBilling] = useState("annual");

  useEffect(() => {
    document.title = "Pricing | Orchestra";
  }, []);

  const plans = [STARTER, proPlan(billing), ENTERPRISE];

  return (
    <main className="pricing-page">
      <section className="pricing-hero">
        <div className="pricing-hero__glow" aria-hidden />
        <div className="shell pricing-hero__inner">
          <p className="pricing-hero__kicker">Pricing plans</p>
          <h1 className="pricing-hero__title">All of your context and code in one place</h1>
          <p className="pricing-hero__lede">
            Build trustworthy knowledge so you can stay heads down.
          </p>
        </div>
      </section>

      <RevealSection className="pricing-tiers-wrap">
        <div className="shell">
          <div className="pricing-billing" role="group" aria-label="Billing period">
            <button
              type="button"
              className={`pricing-billing__opt${billing === "monthly" ? " pricing-billing__opt--active" : ""}`}
              onClick={() => setBilling("monthly")}
            >
              Monthly
            </button>
            <button
              type="button"
              className={`pricing-billing__opt${billing === "annual" ? " pricing-billing__opt--active" : ""}`}
              onClick={() => setBilling("annual")}
            >
              Annually
              <span className="pricing-billing__badge">20% OFF</span>
            </button>
          </div>

          <div className="pricing-tiers">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`pricing-tier${plan.featured ? " pricing-tier--featured" : ""}`}
              >
                {plan.ribbon ? <p className="pricing-tier__ribbon">{plan.ribbon}</p> : null}
                <div className="pricing-tier__head">
                  <h2 className="pricing-tier__name">{plan.name}</h2>
                  <p className="pricing-tier__blurb">{plan.blurb}</p>
                </div>
                <div className="pricing-tier__price-block">
                  {plan.priceLabel ? (
                    <p className="pricing-tier__price pricing-tier__price--custom">{plan.priceLabel}</p>
                  ) : (
                    <p className="pricing-tier__price">
                      <span className="pricing-tier__currency">$</span>
                      <span className="pricing-tier__amount">{plan.price}</span>
                    </p>
                  )}
                  {plan.period ? <p className="pricing-tier__period">{plan.period}</p> : null}
                  {plan.note ? <p className="pricing-tier__note">{plan.note}</p> : null}
                </div>
                <PlanCta plan={plan} />
                <ul className="pricing-tier__features">
                  {plan.features.map((f) => (
                    <li key={f}>
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <p className="pricing-migrate-note">
            If you&apos;d like to migrate content from Confluence, Google Drive, or Notion,{" "}
            <Link to={{ pathname: "/", hash: "demo" }}>contact us</Link>.
          </p>
        </div>
      </RevealSection>

      <RevealSection className="section pricing-trust">
        <div className="shell pricing-trust__grid">
          <div>
            <p className="section__kicker">Trust</p>
            <h2 className="section__title">Built for serious operators</h2>
            <p className="section__subtitle pricing-trust__copy">
              SOC 2 Type II controls, encryption in transit and at rest, and regional hosting
              options on Enterprise. We treat your institutional memory like the asset it is.
            </p>
            <Link className="pricing-trust__link" to="/">
              Back to product overview
            </Link>
          </div>
          <ul className="pricing-trust__badges" aria-label="Security highlights">
            <li className="pricing-trust__badge">SOC 2 Type II</li>
            <li className="pricing-trust__badge">GDPR-ready DPA</li>
            <li className="pricing-trust__badge">SSO &amp; SCIM</li>
            <li className="pricing-trust__badge">99.9% SLA (Enterprise)</li>
          </ul>
        </div>
      </RevealSection>

      <BookingSection />
    </main>
  );
}
