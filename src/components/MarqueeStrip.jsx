function SlackGlyph() {
  return (
    <svg className="marquee__glyph" viewBox="0 0 24 24" aria-hidden>
      <path fill="#E01E5A" d="M5.5 9.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
      <path fill="#36C5F0" d="M9.5 5.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
      <path fill="#b45309" d="M14.5 9.5a1.25 1.25 0 1 1 0-2.5 1.25 1.25 0 0 1 0 2.5z" />
      <path fill="#ECB22E" d="M9.5 14.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
    </svg>
  );
}

function GithubGlyph() {
  return (
    <svg className="marquee__glyph marquee__glyph--github" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.37-3.37-1.37-.46-1.19-1.12-1.5-1.12-1.5-.92-.64.07-.63.07-.63 1.02.07 1.56 1.07 1.56 1.07.9 1.57 2.37 1.12 2.95.85.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05A9.38 9.38 0 0 1 12 6.82c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"
      />
    </svg>
  );
}

function GoogleGlyph() {
  return (
    <svg className="marquee__glyph" viewBox="0 0 24 24" aria-hidden>
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
      <path fill="#b45309" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
    </svg>
  );
}

function LinearGlyph() {
  return (
    <svg className="marquee__glyph marquee__glyph--linear" viewBox="0 0 24 24" aria-hidden>
      <path fill="#5E6AD2" d="M3.035 12.943L12 3.977l8.965 8.966L12 21.908 3.035 12.943zm2.828 0L12 19.08l6.137-6.137L12 6.806 5.863 12.943z" />
    </svg>
  );
}

function DocsGlyph() {
  return (
    <svg className="marquee__glyph marquee__glyph--docs" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
        d="M8 4h8l4 4v12a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"
      />
      <path fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" d="M8 12h8M8 16h5" />
    </svg>
  );
}

const TILES = [
  { key: "slack", label: "Slack", glyph: <SlackGlyph /> },
  { key: "github", label: "GitHub", glyph: <GithubGlyph /> },
  { key: "google", label: "Google", glyph: <GoogleGlyph /> },
  { key: "linear", label: "Linear", glyph: <LinearGlyph /> },
  { key: "docs", label: "Docs", glyph: <DocsGlyph /> },
];

/** One full loop of tiles (length chosen so duplicate + translateX(-50%) is seamless). */
function buildLoop() {
  const out = [];
  for (let i = 0; i < 16; i += 1) {
    out.push({ ...TILES[i % TILES.length], loopIndex: i });
  }
  return out;
}

export function MarqueeStrip() {
  const loop = buildLoop();

  return (
    <div className="marquee" aria-hidden>
      <div className="marquee__track">
        {loop.map((t) => (
          <div key={`a-${t.loopIndex}-${t.key}`} className="marquee__item">
            <div className="marquee__item-inner">
              {t.glyph}
              <span className="marquee__item-label">{t.label}</span>
            </div>
          </div>
        ))}
        {loop.map((t) => (
          <div key={`b-${t.loopIndex}-${t.key}`} className="marquee__item">
            <div className="marquee__item-inner">
              {t.glyph}
              <span className="marquee__item-label">{t.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
