import crypto from "crypto";





export function hash(text: string, arg?: 'md5' | 'sha256' | 'sha512') {

    const hmac = crypto.createHmac(arg || "sha256", "secret");

    const data = hmac.update(text);

    return data.digest("base64");
}




