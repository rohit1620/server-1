require("dotenv").config()
const express=require("express");
const router=require("./routes/auth-router");
const connectDB=require("./database/db")

const app=express();
app.use(express.json())
app.use("/api/auth",router)

connectDB().then(()=>{
app.listen(3000,()=>{
    console.log("server running port 3000");
})
})

