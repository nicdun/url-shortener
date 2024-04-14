import { randomInt } from 'node:crypto';
import { ALLOWED_CHARS, RANDOM_STRING_LENGH } from './config.ts';

export const generateUniqueCode = () => {
    let code = "";

    for (let i = 0 ; i < RANDOM_STRING_LENGH; i++) {
        const index = randomInt(0, ALLOWED_CHARS.length-1);
        code += ALLOWED_CHARS[index];
    }

    return code;
}

export const isValidURL = (str: string)  => {
    try {
        new URL(str);
        return true;
    } catch (err) {
        return false;
    }
}