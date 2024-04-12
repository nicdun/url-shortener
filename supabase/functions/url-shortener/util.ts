import { randomInt } from 'node:crypto';
import { ALLOWED_CHARS, RANDOM_STRING_LENGH } from './config.ts';

export const isCodeUnique = (code: string) => {
    // TODO: check if code exists in DB
   return false; 
}

export const generateUniqueCode = () => {
    let code = "";

    for (let i = 0 ; i < RANDOM_STRING_LENGH; i++) {
        const index = randomInt(0, ALLOWED_CHARS.length-1);
        code += ALLOWED_CHARS[index];
    }

    return code;
}