import * as crypto from 'crypto-js';

export class Encryption {
    private static readonly KEY = 'hmsmart123456789';
    private static readonly IV = 'hmsmart123456789';

    static encrypt(data: string): string {
        const key = crypto.enc.Utf8.parse(Encryption.KEY);
        const iv = crypto.enc.Utf8.parse(Encryption.IV);
        const encrypted = crypto.AES.encrypt(data, key, {
            iv: iv,
            mode: crypto.mode.CBC,
            padding: crypto.pad.Pkcs7
        });
        return encrypted.toString();
    }

    static decrypt(encryptedData: string): string {
        const key = crypto.enc.Utf8.parse(Encryption.KEY);
        const iv = crypto.enc.Utf8.parse(Encryption.IV);
        const decrypted = crypto.AES.decrypt(encryptedData, key, {
            iv: iv,
            mode: crypto.mode.CBC,
            padding: crypto.pad.Pkcs7
        });
        return decrypted.toString(crypto.enc.Utf8);
    }
} 