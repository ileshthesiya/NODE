const express=require("express");
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.json({"msg":"hello"});
})


const login=require("./login");
app.use("/login",login);


const port=5050;
app.listen(port,()=>{
    console.log(`server connect at ${port}`);
})