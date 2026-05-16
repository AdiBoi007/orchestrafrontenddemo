import { useEffect, useState } from "react";
import { CALENDLY_URL } from "../lib/config.js";

const DEMO_PERKS = [
  {
    label: "30-minute video call",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M8 10h8M8 14h5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Pick a time that works for you",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <rect x="4" y="5" width="16" height="15" rx="2" />
        <path d="M8 3v4M16 3v4M4 11h16" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Get answers to all your questions",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 16v-1M12 8h.01" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function BookDemoPanel() {
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    if (!showCalendly || !CALENDLY_URL) return undefined;

    const existing = document.querySelector('script[data-calendly="true"]');
    if (existing) return undefined;

    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    script.dataset.calendly = "true";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [showCalendly]);

  return (
    <div className="booking-card booking-card--demo" id="demo">
      <h3 className="booking-card__title">Book a demo</h3>
      <p className="booking-card__lede">
        See Orchestra in action with a personalized walkthrough.
      </p>

      {!showCalendly ? (
        <>
          <ul className="booking-perks">
            {DEMO_PERKS.map((perk) => (
              <li key={perk.label} className="booking-perk">
                <span className="booking-perk__icon">{perk.icon}</span>
                <span className="booking-perk__text">{perk.label}</span>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="btn btn--primary booking-card__cta"
            onClick={() => setShowCalendly(true)}
          >
            Schedule your demo
          </button>
        </>
      ) : (
        <div className="booking-calendly">
          <div
          className="calendly-inline-widget"
          data-url={CALENDLY_URL}
          style={{ minWidth: "280px", height: "630px" }}
        />
        </div>
      )}
    </div>
  );
}
