const mongoose=require("mongoose");


// const url=process.env.URL;
const url=process.env.URL;

const connectDB=async()=>{
    try {
       await mongoose.connect(url)
       console.log("mongoDB connected");
        
    } catch (error) {
        console.log("not connected",error);
        process.exit(0)
    }
}

module.exports=connectDB;