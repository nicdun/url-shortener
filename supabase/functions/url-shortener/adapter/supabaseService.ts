import { createClient } from "https://esm.sh/@supabase/supabase-js@2.42.0";

export class SupabaseService {
  #supabaseClient;
  #supabaseTableName="urls";

  constructor() {
    this.#supabaseClient = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_ANON_KEY") ?? "",
      //{ global: { headers: { Authorization: authHeader } } }
    );
  }

  public save(long_url: string, short_url: string, code: string) {
    return this.#supabaseClient.from(this.#supabaseTableName)
    .insert({code, long_url, short_url})
    .single();
  }
  public getUrlBy(key: string, value: string) {
    return this.#supabaseClient.from(this.#supabaseTableName)
      .select()
      .eq(
        key,
        value,
      )
      .maybeSingle();
  }
}
