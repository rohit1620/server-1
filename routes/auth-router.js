const express = require("express");
const router=express.Router();
const authRouter=require("../controlers/auth-controles")

router.route("/").get(authRouter.home)

router.route("/register").get(authRouter.register)

module.exports=router;