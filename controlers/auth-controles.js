const User=require("../models/userSchema")

const home=async(req,res)=>{
    try {
         res.status(200).json({msg:"This is home page"})
    } catch (error) {
        res.status(400).json({msg:error})
    }
}

const register=async(req,res)=>{
    try {
        const {username,email,phone,password}=req.body;
        
        if(!username||!email||!phone||!password){
            res.status(400).json({msg:"All field required"})
        }

        const userExist=await User.findOne({email})
        
        if(userExist){
            res.status(400).json({msg:"Email Already Exist"})
        }

        const data= await User.create({username,email,phone,password})
        res.status(200).json({msg:"success"})
    } catch (error) {
        res.status(400).json({msg:error})
    }
}

module.exports={home,register}