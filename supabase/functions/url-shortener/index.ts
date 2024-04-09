// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.
import { HTTPException, Hono } from "https://deno.land/x/hono/mod.ts";
import type { Context } from "https://deno.land/x/hono/mod.ts";
import { getUrl, shortenUrl } from "./short.ts";

// change this to your function name
const functionName = "url-shortener";
const app = new Hono().basePath(`/${functionName}`);

app
  .get("/url/:code", async (c: Context) => {
    const code = c.req.param('code');
    const url = await getUrl(code);
    
    if(!url) {
      throw new HTTPException(404, { message: 'not found' });
    }
    
    return c.redirect(url);
  })
  .post(async (c) => {
    const result = await shortenUrl("url");

    c.status(201);

    return c.body(result);
  });

Deno.serve(app.fetch);

/* To invoke locally:

  1. Run `supabase start` (see: https://supabase.com/docs/reference/cli/supabase-start)
  2. Make an HTTP request:

  curl -i --location --request POST 'http://127.0.0.1:54321/functions/v1/url-shortener' \
    --header 'Authorization: Bearer ' \
    --header 'Content-Type: application/json' \
    --data '{"name":"Functions"}'

*/
