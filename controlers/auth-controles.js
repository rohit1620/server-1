const User=require("../models/userSchema");
const bcrypt=require("bcrypt");


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

        // const hashPassword=await bcrypt.hash(password,10)

        const data= await User.create({username,email,phone,password})
        res.status(200).json({msg:"success",token:await data.generateToken(),userId:data._id.toString()})
    } catch (error) {
        res.status(400).json({msg:error})
    }
}

const login=async(req,res)=>{
    const {email,password}=req.body;
    if(!email||!password){
        res.status(400).json({msg:"All Field Required"})
    }
    try {
        const emailExist=await User.findOne({email});
        if(!emailExist){
            res.status(400).json({msg:"Invailid Crediantial"})
        }
        const compair=await emailExist.comparePassword(password);
        console.log(compair,"wah");
        

        if(!compair){
            res.status(400).json("Invailid passoword or email")
        }
            res.status(400).json({msg:"Login Successfully",token:await emailExist.generateToken(),userId:emailExist._id.toString()})
        
        
    } catch (error) {
        console.error(error)
    }
}

module.exports={home,register,login}