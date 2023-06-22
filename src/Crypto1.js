var CryptoJS = require("crypto-js");

// Encrypt
export function encrypt(text){
    
    return CryptoJS.AES.encrypt(text, 'secret key 123').toString()

};

// Decrypt
export function decrypt(ciphertext){

    var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
    var originalText = bytes.toString(CryptoJS.enc.Utf8);

    return originalText;
}