const express= require("express");
const userRoute=require("./routes/user");
const signupRoute=require("./routes/signup");
const loginRoute=require("./routes/login");

 const bodyParser=require("body-parser");
const app = express();
const  createAdmin=require("./script/admin");

const PORT = process.env.PORT || 5000;
const cors=require("cors");

app.use(bodyParser.json())
app.use(cors());
createAdmin.createAdmin();
app.use("/user",signupRoute);

app.use("/auth",loginRoute);
app.use("/api",userRoute);
app.listen(PORT,()=>{
    console.log(`Server is running on: http://localhost:${PORT}`);
});