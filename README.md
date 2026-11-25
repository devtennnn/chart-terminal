# AROMVIEW

Landing page (`/`), Google sign-in (`/login`) and a live chart terminal (`/terminal`, signed-in users only).
Next.js 15 + Supabase Auth. Charts and market data are TradingView's free widgets, whose attribution must stay.

## Switch on Google sign-in
1. Supabase: create a project (or use an existing one). Authentication → Sign In / Providers → Google → enable.
2. Google Cloud console → APIs & Services → Credentials → Create OAuth client ID (Web application).
   Authorized redirect URI: the callback URL Supabase shows on the Google provider page
   (https://<project-ref>.supabase.co/auth/v1/callback). Paste the client ID and secret into Supabase.
3. Supabase → Authentication → URL Configuration:
   Site URL `https://chart-terminal-xi.vercel.app`, Redirect URLs `https://chart-terminal-xi.vercel.app/**`
   (add `http://localhost:3000/**` for local work).
4. Vercel → Project → Settings → Environment Variables:
   `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (Supabase → Project Settings → API Keys).
   Redeploy. Until both are set, the terminal stays open to everyone and the sign-in button is disabled.

## Run locally
npm install && npm run dev
