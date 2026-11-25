import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { authEnabled } from "@/lib/supabase/config";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  let next = searchParams.get("next") ?? "/terminal";
  if (!next.startsWith("/") || next.startsWith("//")) next = "/terminal";

  if (code && authEnabled) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) return NextResponse.redirect(`${origin}${next}`);
  }
  return NextResponse.redirect(`${origin}/login?error=1`);
}
