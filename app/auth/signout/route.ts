import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { authEnabled } from "@/lib/supabase/config";

export async function POST(request: Request) {
  if (authEnabled) {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }
  return NextResponse.redirect(new URL("/", request.url), { status: 303 });
}
