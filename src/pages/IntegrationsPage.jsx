import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ConfluenceLogo,
  GithubLogo,
  GmailLogo,
  GoogleDriveLogo,
  GoogleWorkspaceLogo,
  GranolaLogo,
  LinearLogo,
  NotionLogo,
  SlackLogo,
  ZendeskLogo,
} from "../components/IntegrationLogos.jsx";
import { RevealSection } from "../components/RevealSection.jsx";

const TEAM_LOGOS = [
  { name: "Slack", Logo: SlackLogo },
  { name: "GitHub", Logo: GithubLogo },
  { name: "Linear", Logo: LinearLogo },
  { name: "Google Drive", Logo: GoogleDriveLogo },
  { name: "Notion", Logo: NotionLogo },
];

const ALL_INTEGRATIONS = [
  {
    name: "Slack",
    description: "Ask questions and manage docs directly from Slack.",
    Logo: SlackLogo,
  },
  {
    name: "GitHub",
    description: "Connect repositories to ask about your codebase.",
    Logo: GithubLogo,
  },
  {
    name: "Linear",
    description: "Sync issues and projects for context-aware answers.",
    Logo: LinearLogo,
  },
  {
    name: "Notion",
    description: "Import pages and databases from your workspace.",
    Logo: NotionLogo,
  },
  {
    name: "Confluence",
    description: "Sync documentation from your Confluence spaces.",
    Logo: ConfluenceLogo,
  },
  {
    name: "Google Drive",
    description: "Connect your personal Google Drive files.",
    Logo: GoogleDriveLogo,
  },
  {
    name: "Google Workspace",
    description: "Sync documents across your Google Workspace.",
    Logo: GoogleWorkspaceLogo,
  },
  {
    name: "Gmail",
    description: "Import emails and threads from Gmail.",
    Logo: GmailLogo,
  },
  {
    name: "Zendesk",
    description: "Import help center and support articles.",
    Logo: ZendeskLogo,
  },
  {
    name: "Granola",
    description: "Sync meeting notes and transcripts.",
    Logo: GranolaLogo,
  },
];

export function IntegrationsPage() {
  useEffect(() => {
    document.title = "Integrations | Orchestra";
  }, []);

  return (
    <main className="integrations-page">
      <section className="integrations-page__hero">
        <div className="integrations-page__hero-glow" aria-hidden />
        <div className="shell integrations-page__hero-inner">
          <p className="integrations-page__eyebrow">About Orchestra</p>
          <h1 className="integrations-page__title">Integrations</h1>
          <p className="integrations-page__lede">
            Your team ships fast. Orchestra makes sure the knowledge keeps up, connecting the dots
            between every tool in your stack.
          </p>
        </div>
      </section>

      <RevealSection className="section integrations-page__split">
        <div className="shell integrations-page__split-grid">
          <div className="integrations-page__split-copy">
            <p className="section__kicker">Maximum productivity</p>
            <h2 className="section__title">For your team</h2>
            <p className="section__subtitle">
              The answer already exists somewhere in your stack. Orchestra makes sure anyone can
              find it, whenever or wherever they need it.
            </p>
          </div>
          <div className="integrations-page__logo-strip" aria-hidden>
            {TEAM_LOGOS.map((item) => {
              const Logo = item.Logo;
              return (
                <div key={item.name} className="integrations-page__logo-tile" title={item.name}>
                  <Logo className="int-logo int-logo--lg" />
                </div>
              );
            })})
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section integrations-page__split integrations-page__split--reverse">
        <div className="shell integrations-page__split-grid">
          <div className="integrations-page__graph" aria-hidden>
            <div className="integrations-page__graph-grid">
              {ALL_INTEGRATIONS.slice(0, 9).map((item) => {
                const Logo = item.Logo;
                return (
                  <span key={item.name} className="integrations-page__graph-node">
                    <Logo className="int-logo" />
                  </span>
                );
              })}
            </div>
          </div>
          <div className="integrations-page__split-copy">
            <p className="section__kicker">Knowledge graph</p>
            <h2 className="section__title">For your agents</h2>
            <p className="section__subtitle">
              Every AI tool you run is only as good as what it knows. Orchestra is the connective
              tissue, a knowledge layer that grows with your team, so every agent always has the full
              picture.
            </p>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section integrations-page__catalog">
        <div className="shell">
          <p className="section__kicker">Connect your stack</p>
          <h2 className="section__title">All integrations</h2>
          <div className="integrations-page__grid">
            {ALL_INTEGRATIONS.map((item) => {
              const Logo = item.Logo;
              return (
                <article key={item.name} className="integrations-page__card">
                  <div className="integrations-page__card-icon">
                    <Logo className="int-logo int-logo--lg" />
                  </div>
                  <h3 className="integrations-page__card-title">{item.name}</h3>
                  <p className="integrations-page__card-desc">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </RevealSection>

      <section className="cta-band">
        <div className="shell cta-band__inner">
          <h2 className="cta-band__title">Knowledge awaits</h2>
          <div className="cta-band__actions">
            <Link className="btn btn--primary" to={{ pathname: "/", hash: "waitlist" }}>
              Join waitlist
            </Link>
            <Link className="btn btn--ghost" to={{ pathname: "/", hash: "demo" }}>
              Book a demo
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
