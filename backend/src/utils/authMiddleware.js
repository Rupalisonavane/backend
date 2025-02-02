const jwt =require("jsonwebtoken");

const secreteKey =require("../configuration/jwtConfig");


function authenticateToken(req,res,next)
{
     const authHeader=req.header("Authorization");
     if(!authHeader)
     {
        return res.status(201).json({message:"Unauthorized:missing token"})

     }
     const [bearer,token]=authHeader.split(" ");
     if(bearer!=='Bearer'|| !token)
     {
        return res.status(401).json({message:"Unauthorized:Invalid token format"})
     }
     jwt.verify(token,secreteKey,(err,user)=>{
        if(err)
        {
            return res.status(403).json({message:"forbidden:Invalid token"})
        }
        req.user=user;
        next();
     })
}

module.exports={authenticateToken}