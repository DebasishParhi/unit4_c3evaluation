const mongoose=require("mongoose")

const bookschema=new mongoose.Schema({
    likes:{type:Number,min:0},
    coverImage :{type:String,required:true,max:1},
    content :{type:String,required:true}
},{
    timestamps:{type:String,required:true}
})

const Book=mongoose.model("book",bookschema)

module.exports=Book