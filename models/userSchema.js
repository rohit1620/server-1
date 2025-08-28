const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt =require("jsonwebtoken")

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
   
});

userSchema.pre("save",async function (next) {
   const user=this;

   if(!user.isModified("password")){
     return next();
   }

   try {
    const salt=await bcrypt.genSalt(10);
   const hash_password=await bcrypt.hash(user.password,salt);
   user.password=hash_password;
   } catch (error) {
    return next(error)
   }
   
    
})

userSchema.methods.generateToken= async function () {
    try {
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email
        },
        process.env.SEC_KEY,
        {
            expiresIn:"3d"
        }
    )
    } catch (error) {
        console.error(error)
    }
}

userSchema.methods.comparePassword=async function(password){
    try {
        return bcrypt.compare(password,this.password)
    } catch (error) {
        console.log(error);
        
    }
}

const User= mongoose.model("User",userSchema)
module.exports =User