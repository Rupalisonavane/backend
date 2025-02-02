const crypto=require("crypto");
const secreteKey=crypto.randomBytes(32).toString('hex');

module.export={
    secreteKey:secreteKey
}