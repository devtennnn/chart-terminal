import Link from "next/link";
import Brand from "./components/Brand";
import HeroChart from "./components/HeroChart";

const FEATURES = [
  ["Live gold and forex", "XAUUSD, silver, the major FX pairs, US indices and crypto, updating as the market moves."],
  ["Pro drawing tools", "Trend lines, Fibonacci, patterns, long and short position boxes, brush and text."],
  ["100+ indicators", "EMA, RSI, MACD, Bollinger Bands, VWAP and many more, stacked as you like."],
  ["Every timeframe", "From 1-minute scalping charts up to weekly and monthly views, with quick date ranges."],
  ["Watchlist and details", "Switch symbols in one tap and see bid, ask, day range and performance beside the chart."],
  ["One sign-in", "Sign in with Google and your terminal is ready on laptop or phone."],
];
const MARKETS = ["XAUUSD", "XAGUSD", "EURUSD", "GBPUSD", "USDJPY", "AUDUSD", "US500", "NAS100", "BTCUSD", "ETHUSD"];

export default function Home() {
  return (
    <div className="site">
      <header className="nav">
        <Brand />
        <nav>
          <a href="#features">Features</a>
          <a href="#markets">Markets</a>
          <Link href="/login" className="ghost">Sign in</Link>
          <Link href="/terminal" className="cta">Open terminal</Link>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <h1>Chart gold and forex like a pro, right in your browser.</h1>
          <p>AROMVIEW gives you a full trading chart terminal with live XAUUSD prices, drawing tools and indicators. Sign in and start charting in seconds.</p>
          <div className="actions">
            <Link href="/terminal" className="cta big">Open the terminal</Link>
            <a href="#features" className="ghost big">See features</a>
          </div>
        </div>
        <div className="hero-art">
          <HeroChart />
        </div>
      </section>

      <section id="features" className="band">
        <h2>Everything you need on one screen</h2>
        <div className="grid">
          {FEATURES.map(([t, d]) => (
            <article key={t} className="card">
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="markets" className="band markets">
        <h2>Markets in your watchlist</h2>
        <div className="chips">{MARKETS.map((m) => <span key={m}>{m}</span>)}</div>
        <p className="mute">Search any other symbol from inside the terminal.</p>
      </section>

      <section className="band final">
        <h2>Ready to read the next move?</h2>
        <Link href="/terminal" className="cta big">Start charting free</Link>
      </section>

      <footer className="foot">
        <Brand size={22} />
        <span>© {new Date().getFullYear()} AROMVIEW. Market data and charts by TradingView. Not financial advice.</span>
      </footer>
    </div>
  );
}
