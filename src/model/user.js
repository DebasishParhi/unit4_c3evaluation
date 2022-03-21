const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    firstname:{type:String,required:true,maxlength:30,minlength:3},
    lastname:{type:String,required:false,maxlength:30,minlength:3},
    age:{type:Number,required:true},
    email:{type:String,required:true,unique:true},
    profileimage:{type:String,required:true}
},{
    timestamps:{type:String,required:true}
})

const User=mongoose.model("user",userSchema)

module.exports=User