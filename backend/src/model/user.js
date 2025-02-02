const mongoosse=require("../configuration/dbConfig");

const userSchema=new mongoosse.Schema({
    name:String,
    email:String,
    password:String,
    role:{type:String,enum:["admin","customer"],default:"customer"}

});

module.exports=mongoosse.model("user",userSchema);