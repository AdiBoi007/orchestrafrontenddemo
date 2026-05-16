import { useState } from "react";
import { Link } from "react-router-dom";
import { HubMark } from "./HubMark.jsx";
import { RevealSection } from "./RevealSection.jsx";

function SlackLogo() {
  return (
    <svg className="int-source__logo" viewBox="0 0 24 24" aria-hidden>
      <path fill="#E01E5A" d="M5.5 9.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
      <path fill="#36C5F0" d="M9.5 5.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
      <path fill="#b45309" d="M14.5 9.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
      <path fill="#ECB22E" d="M9.5 14.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
    </svg>
  );
}

function GithubLogo() {
  return (
    <svg className="int-source__logo int-source__logo--github" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.57 2.37 1.12 2.95.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.38 9.38 0 0 1 12 6.82c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
      />
    </svg>
  );
}

function GoogleLogo() {
  return (
    <svg className="int-source__logo" viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#b45309" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function LinearLogo() {
  return (
    <svg className="int-source__logo int-source__logo--linear" viewBox="0 0 24 24" aria-hidden>
      <path fill="#5E6AD2" d="M3.035 12.943L12 3.977l8.965 8.966L12 21.908 3.035 12.943zm2.828 0L12 19.08l6.137-6.137L12 6.806 5.863 12.943z" />
    </svg>
  );
}

function IconQuill() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M4 20h16M6 16l6-12 6 12M9 16h6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCode() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <path d="M8 7l-4 4 4 4M16 7l4 4-4 4M13 5l-2 14" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconAsk() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 16v-1M12 8h.01" strokeLinecap="round" />
    </svg>
  );
}

function IconDb() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
      <ellipse cx="12" cy="6" rx="7" ry="3" />
      <path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" strokeLinecap="round" />
    </svg>
  );
}

const ROWS = [
  {
    id: 1,
    source: <SlackLogo />,
    icon: <IconQuill />,
    title: "Write docs with AI",
    desc: "Draft and refine documentation with context from your connected sources.",
  },
  {
    id: 2,
    source: <GithubLogo />,
    icon: <IconCode />,
    title: "Work with your code",
    desc: "Keep your documentation in sync with your codebase.",
  },
  {
    id: 3,
    source: <GoogleLogo />,
    icon: <IconAsk />,
    title: "Ask questions",
    desc: "Query your product brain and get answers tied to real sources.",
  },
  {
    id: 4,
    source: <LinearLogo />,
    icon: <IconDb />,
    title: "Self-updating",
    desc: "Let changes in Slack, PRs, and docs flow back into your living spec.",
  },
];

const DEFAULT_ACTIVE = 2;

export function IntegrationsPanel() {
  const [activeId, setActiveId] = useState(DEFAULT_ACTIVE);

  return (
    <RevealSection className="section section--integrations" id="integrations">
      <div className="shell">
        <div className="integrations-card">
          <div className="integrations-card__grid">
            <div className="integrations-card__copy">
              <p className="integrations-card__kicker">Getting started</p>
              <h2 className="integrations-card__title">Work the way you already work</h2>
              <p className="integrations-card__body">
                Connect your files and key tools to get started with zero learning curve. Integrate
                with GitHub, Slack, and Linear so you can write code, collaborate with others, and
                let Orchestra maintain your organizational context.
              </p>
              <Link className="integrations-card__link" to="/integrations">
                Discover all integrations →
              </Link>
            </div>

            <div
              className="integrations-tree"
              onMouseLeave={() => setActiveId(DEFAULT_ACTIVE)}
            >
              <div
                className="integrations-flow"
                data-active={activeId}
              >
                <div className="integrations-flow__diagram">
                  <div className="it-diagram__spine" aria-hidden />
                  <div className={`int-hub${activeId ? " int-hub--receiving" : ""}`}>
                    <div className="int-hub__glow" aria-hidden />
                    <div className="int-hub__mark">
                      <HubMark />
                    </div>
                  </div>
                  {ROWS.map((row) => (
                    <div key={`diagram-${row.id}`} className="it-diagram__row">
                      <span
                        className={`int-source__tile it-diagram__tile--${row.id}${
                          activeId === row.id ? " int-source__tile--flowing" : ""
                        }`}
                      >
                        {row.source}
                      </span>
                      <span
                        className={`it-diagram__pipe it-diagram__pipe--${row.id}${
                          activeId === row.id ? " it-diagram__pipe--active" : ""
                        }`}
                        aria-hidden
                      />
                    </div>
                  ))}
                </div>

                <div className="integrations-flow__features">
                  {ROWS.map((row) => (
                    <article
                      key={`feat-${row.id}`}
                      className={`it-feature${
                        activeId === row.id ? " it-feature--active" : ""
                      }`}
                      onMouseEnter={() => setActiveId(row.id)}
                    >
                      <span className="it-feature__icon">{row.icon}</span>
                      <div className="it-feature__text">
                        <h3 className="it-feature__title">{row.title}</h3>
                        <p className="it-feature__desc">{row.desc}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
