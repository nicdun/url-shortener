// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.
import { Hono, HTTPException } from "https://deno.land/x/hono/mod.ts";
import { cors } from "https://deno.land/x/hono@v4.2.3/middleware/cors/index.ts";
import { UrlService } from "./urlService.ts";
import { isValidURL } from "./util.ts";

// change this to your function name
const functionName = "url-shortener";
const app = new Hono().basePath(`/${functionName}`);
const urlService = new UrlService();

app.use(
  "/url/*",
  cors({
    origin: [
      Deno.env.get("BASE_EDGE_FUNCTION_URL")!,
      Deno.env.get("FRONTEND_URL")!,
    ],
    allowHeaders: ["X-Custom-Header", "Upgrade-Insecure-Requests"],
    allowMethods: ["POST", "GET", "OPTIONS"],
    maxAge: 600,
    credentials: true,
  }),
);

app
  .get("/url/:code", async (c) => {
    const code = c.req.param("code");
    const url = await urlService.getUrl(code);
    
    if (!url) {
      throw new HTTPException(404, { message: "not found" });
    }
    
    return c.redirect(url);
  });
  
  app.post("/url", async (c) => {
    const body = await c.req.json();
    const url = body["url"];
    const validUrl = isValidURL(url);
    
  if (!url || typeof url != "string" || !validUrl) {
    throw new HTTPException(422, {
      message: "Cannot process body information: [URL]",
    });
  }

  const result = await urlService.generateShortUrl(url);

  if (!result) {
    throw new HTTPException(500, { message: "URL processing failed" });
  }

  c.status(201);

  return c.body(result);
});

Deno.serve(app.fetch);
