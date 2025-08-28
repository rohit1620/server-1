const express = require("express");
const router=express.Router();
const authRouter=require("../controlers/auth-controles")

router.route("/").get(authRouter.home)

router.route("/register").post(authRouter.register)

module.exports=router;