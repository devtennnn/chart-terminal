export const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
export const SUPABASE_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

// Sign-in turns on once both variables are set in Vercel. Until then the site still works, unprotected.
export const authEnabled = Boolean(SUPABASE_URL && SUPABASE_KEY);
