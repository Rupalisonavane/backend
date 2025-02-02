const bcrypt = require("bcrypt");
const User = require("../model/user");
const { generateToken } = require("../utils/jwtUtils");

async function login(email, password) {
  try {
    console.log("Hellooooooooooo");
    
    const existingUser = await User.findOne({ email });

    console.log("User"+existingUser);
    
    if (!existingUser) {
      throw new Error("User not found");
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    console.log(isPasswordValid);
    
    // if (!isPasswordValid) {
    //   throw new Error("Invalid Password");
    // }

    const token = generateToken(existingUser);
    return token;
  } catch (error) {
    throw new Error("Invalid Credentials");
  }
}

module.exports = { login };