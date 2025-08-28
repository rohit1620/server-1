
const home=async(req,res)=>{
    try {
         res.status(200).json({msg:"This is home page"})
    } catch (error) {
        res.status(400).json({msg:error})
    }
}

const register=async(req,res)=>{
    try {
        res.status(200).json({msg:"This is Register page"})
    } catch (error) {
        res.status(400).json({msg:error})
    }
}

module.exports={home,register}