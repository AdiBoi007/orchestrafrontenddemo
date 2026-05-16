import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BookingSection } from "../components/BookingSection.jsx";
import { IntegrationsPanel } from "../components/IntegrationsPanel.jsx";
import { MarqueeStrip } from "../components/MarqueeStrip.jsx";
import { RevealSection } from "../components/RevealSection.jsx";

export function HomePage() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Orchestra - Knowledge awaits";
  }, []);

  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (!hash || !["waitlist", "demo", "get-started"].includes(hash)) return;
    const id = window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => window.clearTimeout(id);
  }, [location.hash, location.pathname]);

  return (
    <main>
      <section className="hero">
        <div className="hero__glow" aria-hidden />
        <div className="shell hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__dot" />
              Long-term memory
            </p>
            <h1 className="hero__title">
              The source of truth
              <br />
              <em>for high-speed teams</em>
            </h1>
            <p className="hero__lede">
              The best way to understand your company and codebase in one self-updating company
              brain.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#demo">
                Book a demo
              </a>
              <a className="btn btn--ghost" href="#waitlist">
                Join the waitlist
              </a>
            </div>
          </div>
          <div className="hero__visual" aria-hidden>
            <div className="device-frame">
              <div className="device-frame__chrome">
                <span />
                <span />
                <span />
              </div>
              <div className="device-frame__screen">
                <div className="mock-doc">
                  <div className="mock-doc__sidebar" />
                  <div className="mock-doc__body">
                    <div className="mock-doc__line mock-doc__line--title" />
                    <div className="mock-doc__line" />
                    <div className="mock-doc__line" />
                    <div className="mock-doc__line mock-doc__line--short" />
                    <div className="mock-doc__block" />
                  </div>
                </div>
              </div>
            </div>
            <div className="hero__cards">
              <div className="float-card float-card--1" />
              <div className="float-card float-card--2" />
              <div className="float-card float-card--3" />
            </div>
          </div>
        </div>
      </section>

      <RevealSection className="section section--tight" id="product">
        <div className="shell">
          <p className="section__kicker">Maximum productivity</p>
          <h2 className="section__title">Self-updating internal docs</h2>
          <p className="section__subtitle">
            Write and find accurate docs that keep themselves organized and up to date.
          </p>
          <MarqueeStrip />
        </div>
      </RevealSection>

      <RevealSection className="section" id="flow">
        <div className="shell">
          <p className="section__kicker">Flow state at your fingertips</p>
          <h2 className="section__title">
            Orchestra was built for teams that value productivity, shipping fast, and getting
            the most out of their AI tools.
          </h2>
          <ol className="steps">
            <li className="steps__item">
              <span className="steps__num">01</span>
              <h3 className="steps__title">Answers you can actually trust</h3>
              <p className="steps__text">
                Skip repeat questions, unblock yourself, and cancel the coordination meetings.
              </p>
            </li>
            <li className="steps__item">
              <span className="steps__num">02</span>
              <h3 className="steps__title">Maintain a real source of truth</h3>
              <p className="steps__text">
                Scale your organization with a central knowledge system that everyone from
                engineering to sales can rely on.
              </p>
            </li>
            <li className="steps__item">
              <span className="steps__num">03</span>
              <h3 className="steps__title">Build reliable context for agents</h3>
              <p className="steps__text">
                Get more out of your coding agents by providing important context that&apos;s
                actually accurate.
              </p>
            </li>
          </ol>
        </div>
      </RevealSection>

      <IntegrationsPanel />

      <RevealSection className="section" id="memory">
        <div className="shell">
          <p className="section__kicker">System of record</p>
          <h2 className="section__title">Reliable context when you need it most</h2>
          <p className="section__subtitle">
            Ask or find anything with a unified, self-maintaining memory bank for your tribal
            knowledge, docs, and code.
          </p>
          <div className="bento">
            <article className="bento__card bento__card--wide">
              <h3 className="bento__title">Tribal knowledge</h3>
              <p className="bento__text">
                Decisions, rationale, and nuance, captured where your team already works.
              </p>
              <div className="bento__art bento__art--grid" />
            </article>
            <article className="bento__card">
              <h3 className="bento__title">Built for writing</h3>
              <p className="bento__text">
                Technical writing and information architecture, without the busywork.
              </p>
              <div className="bento__art bento__art--lines" />
            </article>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section section--quote">
        <div className="shell quote-block">
          <div className="bird" aria-hidden>
            <svg viewBox="0 0 120 100" className="bird__svg" role="img">
              <defs>
                <linearGradient id="wing" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="rgba(180, 83, 9, 0.35)" />
                  <stop offset="100%" stopColor="rgba(180, 83, 9, 0.85)" />
                </linearGradient>
              </defs>
              <path
                className="bird__body"
                d="M20 55 C35 35 55 30 75 40 C90 48 100 55 105 65 C85 58 65 58 50 62 C38 65 28 72 20 78 Z"
              />
              <path
                className="bird__wing"
                d="M45 42 C60 22 88 18 98 38 C82 32 62 36 45 42 Z"
                fill="url(#wing)"
              />
            </svg>
          </div>
          <div>
            <p className="section__kicker">Built for writing</p>
            <h2 className="section__title section__title--narrow">Write like the best</h2>
            <p className="section__subtitle">
              Built with industry-leading practices for technical writing and information
              architecture, Orchestra has the knowledge to supercharge your work.
            </p>
          </div>
        </div>
      </RevealSection>

      <BookingSection />
    </main>
  );
}
