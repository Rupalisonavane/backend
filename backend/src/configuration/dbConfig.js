const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/backend",{
    serverSelectionTimeoutMS:5000
});

mongoose.connection.on("Connected",()=>
 {
    console.log("Connected to mongodb database");
    
 }
);
mongoose.connection.on("error",(err)=>{
    console.log(`Error connecting with db:${err}`);
    
})
module.exports=mongoose;