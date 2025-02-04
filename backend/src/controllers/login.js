const authService=require("../services/login")


async function login(req,res)
{
    try {
        console.log(req.body);
     const {email,password}=req.body;
     const token= await authService.login(email,password);
     
     if (!token) {
        return res.status(401).json({ message: "Invalid Credentials" });
    }

    res.json( {token: token} );
    }catch(error){

        res.status(401).json({message:"Invalid Credential"});
    }
}

module.exports={
    login
}