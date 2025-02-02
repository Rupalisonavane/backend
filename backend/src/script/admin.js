const User = require("../model/user");
const bcrypt = require("bcrypt");

async function createAdmin() {
  try {
    const checkExistingAdmin = await User.findOne({ email: "admin123@mymail.com" });

    if (!checkExistingAdmin) {
      const hashedPassword = await bcrypt.hash("admin", 10);

      const newAdmin = new User({
        name: "admin123",
        email: "admin123@mymail.com",
        password: hashedPassword,
        role: "admin",
      });

      await newAdmin.save();
      console.log("Admin Created Successfully");
    } else {
      console.log("Admin Already Exists");
    }
  } catch (error) {
    console.log(error.message);
  }
}

module.exports ={createAdmin};
