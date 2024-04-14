import { SupabaseService } from "./adapter/supabaseService.ts";
import { generateUniqueCode } from "./util.ts";

export class UrlService {
  #supabaseAdapter;
  #frontendUrl = Deno.env.get("FRONTEND_URL");

  constructor(authHeader: string) {
    this.#supabaseAdapter = new SupabaseService(authHeader);
  }

  public async generateShortUrl(url: string) {
    const { data } = await this.#supabaseAdapter.getUrlBy("url", url);
    
    if(data) {
      return data.short_url;
    }

    let code = "";
    let codeUnique = false;
    do {
      code = generateUniqueCode();
      codeUnique = await this.isCodeUnique(code);
    } while (!codeUnique);

    const shortenUrl = `${this.#frontendUrl}/${code}`;

    const { error } = await this.#supabaseAdapter.save(url, shortenUrl, code);

    if(error) {
      console.error("Error during url insertion", error);
      throw new Error("Error during url insertion");
    }

    return shortenUrl;
  }

  public async getUrl(code: string) {
    const { data, error } = await this.#supabaseAdapter.getUrlBy("code", code);

    console.log(data)

    if (error || !data) {
      console.error(error);
      return;
    }
    return data.long_url;
  }

  private async isCodeUnique(code: string) {
    const { data, error } = await this.#supabaseAdapter.getUrlBy("code", code);

    if (error) {
      console.error("Failed to check code uniqueness", error);
      throw new Error("Failed to check code uniqueness");
    }

    return !data;
  }
}
