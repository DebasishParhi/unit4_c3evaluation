const mongoose=require("mongoose")

const publiacationSchema=new mongoose.Schema({
    name:{type:String,required:true},
    bookId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"book"
    }
},{
    timestamps:{type:String,required:true}
})


const Publication=mongoose.model("publication",publiacationSchema)

module.exports=Publication