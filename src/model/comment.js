const mongoose=require("mongoose")

const commentscema=new mongoose.Schema({
    body:{type:String,required:true},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    boolId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book"
    }
},{
    timestamps:{type:String,required:true}
})

const Comment=mongoose.model("comment",commentscema)

module.exports=Comment