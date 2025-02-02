const authService=require("../services/login")


async function login(req,res)
{
    try {
     const {email,password}=req.body;
     const token=await authService.login(email,password);
     console.log(token);
     res.json({token:token});
    }catch(error){
        res.status(401).json({message:"Invalid Credential"});
    }
}

module.exports={
    login
}