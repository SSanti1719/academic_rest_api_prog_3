/**packages */
const CryptoJS = require("crypto-js");
const config = require("config")
const jwt = require("jsonwebtoken")
/** Encrypt password */


exports.EncryptPassword = (password) => {
    let secretKey = config.get("secretkeys").cryptojs;
    var encryptedPassword = CryptoJS.AES.encrypt(password, secretKey).toString()
    console.log(encryptedPassword);
    return encryptedPassword;
};

exports.DecryptPassword = (cryptedPassword) => {
    let secretKey = config.get("secretkeys").cryptojs;
    var bytes = CryptoJS.AES.decrypt(cryptedPassword, secretKey);
    var originalPass = bytes.toString(CryptoJS.enc.Utf8);
    return originalPass
}

exports.GenerateToken = (user) => {
    let secretKey = config.get("secretkeys").jwt;
    let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: {
            username: user.username,
            id:user._id
        }
    }, secretKey);
    return token;
}