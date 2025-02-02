const jwt=require("jsonwebtoken");
const secreteKey=require("../configuration/jwtConfig");

 function generateToken(user)
{
  const payload={
    id:user.id,
    email:user.email,
    role:user.role

  }
  return jwt.sign(payload,secreteKey,{expiresIn:"1hr"});
}

module.exports={generateToken};