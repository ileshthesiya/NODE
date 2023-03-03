const express=require("express");
const middleware = require("../middleware/middleware");
const tokenObj=require("../Token/token");

module1=express.Router();

module1.get("/",[middleware],(req,res,next)=>{
    res.json({"msg":"inside module1 "});
})

module.exports=module1;