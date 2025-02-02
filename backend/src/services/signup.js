const user = require("../model/user");
const bcrypt=require("bcrypt");

async function createUser(userData)
{
    const {name,email,password}=userData;
    const hashedPassword= await bcrypt.hash(password,10);
    const createUser=new user({
        name,
        email,
        password:hashedPassword,
        role:'customer'
    });
    const savedUseer=await createUser.save();
    return savedUseer;
}
module.exports={createUser};