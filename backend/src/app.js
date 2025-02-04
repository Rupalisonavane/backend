const express= require("express");
const {createAdmin}=require("./script/admin");

const userRoute=require("./routes/user");
const signupRoute=require("./routes/signup");
const loginRoute=require("./routes/login");
 const bodyParser=require("body-parser");
 const eventRoute = require("./routes/eventRoutes");

const app = express();

const PORT = process.env.PORT || 5000;
const cors=require("cors");
createAdmin();

app.use(bodyParser.json())
app.use(cors());
app.use("/user",signupRoute);

app.use("/auth",loginRoute);
app.use("/api",userRoute);
app.use("/api/event", eventRoute);

app.listen(PORT,()=>{
    console.log(`Server is running on: http://localhost:${PORT}`);
});