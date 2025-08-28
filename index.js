const express=require("express");
const router=require("./routes/auth-router")

const app=express();
app.use("/api/auth",router)

app.listen(3000,()=>{
    console.log("server running port 3000");
    
})
