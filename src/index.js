const express=require("express")

// const mongoose=require("mangoose")

const app=express()

// const connect=require("./config/dbs")

// const User=require("./model/user")



app.use(express.json())
app.listen(4000,async ()=>{
    try{
        await connect()
    }
    catch(err){
        console.log("err");
    }
    console.log("connecting to port 4000");
})