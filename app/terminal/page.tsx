import TradingViewWidget from "../components/TradingViewWidget";
import Brand from "../components/Brand";
import { createClient } from "@/lib/supabase/server";
import { authEnabled } from "@/lib/supabase/config";

export const metadata = { title: "Terminal · AROMVIEW" };
export const dynamic = "force-dynamic";

const WATCHLIST = [
  "OANDA:XAUUSD", "OANDA:XAGUSD", "FX:EURUSD", "FX:GBPUSD", "FX:USDJPY",
  "FX:AUDUSD", "OANDA:SPX500USD", "OANDA:NAS100USD", "BITSTAMP:BTCUSD", "BITSTAMP:ETHUSD",
];

// Full TradingView chart: drawing tools, 100+ indicators, timeframes, chart types, live forex/crypto data.
const CHART = {
  autosize: true,
  symbol: "OANDA:XAUUSD",
  interval: "5",
  timezone: "Asia/Bangkok",
  theme: "dark",
  style: "1",
  locale: "en",
  withdateranges: true,
  hide_side_toolbar: false,   // left drawing toolbar
  allow_symbol_change: true,  // symbol search
  details: true,              // right panel: symbol details
  watchlist: WATCHLIST,       // right panel: watchlist
  calendar: false,
  save_image: true,
  studies: ["MAExp@tv-basicstudies", "RSI@tv-basicstudies"],
  support_host: "https://www.tradingview.com",
};

const TAPE = {
  symbols: [
    { proName: "OANDA:XAUUSD", title: "Gold" },
    { proName: "FX:EURUSD", title: "EUR/USD" },
    { proName: "FX:GBPUSD", title: "GBP/USD" },
    { proName: "FX:USDJPY", title: "USD/JPY" },
    { proName: "OANDA:XAGUSD", title: "Silver" },
    { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
  ],
  showSymbolLogo: true,
  colorTheme: "dark",
  isTransparent: true,
  displayMode: "adaptive",
  locale: "en",
};

export default async function Terminal() {
  let email: string | null = null;
  if (authEnabled) {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    email = user?.email ?? null;
  }
  return (
    <main className="terminal">
      <header className="tbar">
        <Brand size={24} />
        <div className="tbar-right">
          {email && <span className="who">{email}</span>}
          {email && (
            <form action="/auth/signout" method="post">
              <button className="ghost sm">Sign out</button>
            </form>
          )}
        </div>
      </header>
      <div className="tape">
        <TradingViewWidget src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js" config={TAPE} />
      </div>
      <div className="chart">
        <TradingViewWidget src="https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js" config={CHART} />
      </div>
    </main>
  );
}
