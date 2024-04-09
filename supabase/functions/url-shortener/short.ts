import { getUrlFromSupabaseDb } from "./adapter/supabase.ts";
import { generateUniqueCode, isCodeUnique } from "./util.ts";


export const shortenUrl = async (url: string) => {
    // TODO: check if URL already shortened
    
    let code = '';
    let index = 1;
    do {
        console.log("AAA")
        code = generateUniqueCode();
        console.log(code)
        index++;
    } while (isCodeUnique(code));

    const shortenUrl = `base/path/api/${code}`;

    // TODO: save to DB

    return shortenUrl;
}

export const getUrl = async (code: string) => {
    const url = await getUrlFromSupabaseDb(code);
    return url;
}
