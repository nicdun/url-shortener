import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const BASE_URL="https://magicli.nk"
export const getUrlFromSupabaseDb = async (code: string) => {
  const supabase = createClient(
    Deno.env.get("SUPABASE_URL") ?? "",
    Deno.env.get("SUPABASE_ANON_KEY") ?? "",
    //{ global: { headers: { Authorization: authHeader } } }
  );

  const { data, error } = await supabase
    .from("url")
    .select("long_url")
    .eq(
      "code",
      code,
    )
    .maybeSingle();

    if(error || !data) {
        console.error(error);
        return;
    }
    return data.long_url;
};
