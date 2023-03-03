const express=require("express");
const middleware = require("../middleware/middleware");
const tokenObj=require("../Token/token");

module2=express.Router();

module1.get("/",[middleware],(req,res,next)=>{
    res.json({"msg":"inside module1 Success"});
})

module.exports=module2;