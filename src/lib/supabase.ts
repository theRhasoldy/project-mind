import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const cookieStore = cookies();

export const supabase = createServerComponentClient({
  cookies: () => cookieStore,
});
