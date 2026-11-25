import Brand from "../components/Brand";
import LoginButtons from "./LoginButtons";
import { authEnabled } from "@/lib/supabase/config";

export default async function Login({ searchParams }: { searchParams: Promise<{ error?: string; next?: string }> }) {
  const { error, next } = await searchParams;
  const safeNext = next && next.startsWith("/") && !next.startsWith("//") ? next : "/terminal";
  return (
    <main className="auth">
      <div className="auth-card">
        <Brand size={40} />
        <h1>Sign in to AROMVIEW</h1>
        <p className="mute">Use your Google account to open your chart terminal.</p>
        {error && <p className="err">Sign-in didn’t complete. Please try again.</p>}
        <LoginButtons next={safeNext} enabled={authEnabled} />
        {!authEnabled && <p className="mute small">Sign-in isn’t switched on for this site yet.</p>}
      </div>
    </main>
  );
}
