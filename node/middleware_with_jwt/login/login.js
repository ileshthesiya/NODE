const express=require("express");
const jwtToken=require("jsonwebtoken");
const tokenObj=require("../Token/token");

login=express.Router();

login.get("/",(req,res)=>{
    res.json({"msg":"inside login"});
})

login.post("/",(req,res)=>{
    const uname=req.body.uname;
    const upwd=req.body.upwd;

    if(uname=="admin" && upwd=="admin123")
    {
        const token=jwtToken.sign({uname:"admin",upwd:"admin123"},"skill",{expiresIn:"50s"});
        tokenObj.token=token;
        res.json({login:"Success",token,token})
    }
    else{
        res.json({login:"Fail"})
    }
})

module.exports=login