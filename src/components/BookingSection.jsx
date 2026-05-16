import { RevealSection } from "./RevealSection.jsx";
import { WaitlistForm } from "./WaitlistForm.jsx";
import { BookDemoPanel } from "./BookDemoPanel.jsx";

const WAITLIST_PERKS = [
  "Early access to Orchestra beta",
  "Exclusive founder pricing",
  "Direct line to the product team",
];

export function BookingSection() {
  return (
    <RevealSection className="section section--booking" id="get-started">
      <div className="booking__glow" aria-hidden />
      <div className="shell booking">
        <div className="booking__intro">
          <p className="section__kicker">Get started</p>
          <h2 className="section__title booking__title">Ready to unify your project chaos?</h2>
          <p className="section__subtitle booking__subtitle">
            Book a personalized demo to see how Orchestra can transform your team&apos;s workflow,
            or join our waitlist for early access.
          </p>
        </div>

        <div className="booking__grid">
          <article className="booking-card booking-card--waitlist" id="waitlist">
            <h3 className="booking-card__title">Join the waitlist</h3>
            <p className="booking-card__lede">
              Get early access and exclusive updates. No spam, we promise.
            </p>
            <WaitlistForm />
            <div className="booking-card__extras">
              <p className="booking-card__extras-label">What you&apos;ll get</p>
              <ul className="booking-card__list">
                {WAITLIST_PERKS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>

          <BookDemoPanel />
        </div>
      </div>
    </RevealSection>
  );
}
