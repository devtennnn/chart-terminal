# Chart Terminal (TradingView)

Full-screen TradingView chart terminal: live XAUUSD by default, drawing tools, indicators,
watchlist, symbol details and a ticker tape. Uses TradingView's free official widgets.

## Run
npm install
npm run dev        # open http://localhost:3000

## Deploy
Push to GitHub and import into Vercel (no settings needed).

## Change things
Edit `app/page.tsx`: default symbol, interval, timezone, watchlist, default indicators.
Keep TradingView's attribution in the widget — it is part of their free-use terms.
