const express=require("express");
const app=express();

app.use(express.json());

// app.get("/",(req,res)=>{
//     res.json({"msg":"hello"});
// })


const login=require("./login/login");
app.use("/login",login);

const module1=require("./module1/module1");
app.use("/module1",module1);

const module2=require("./module2/module2");
app.use("/module2",module2);

const module3=require("./module3/module3");
app.use("/module3",module3);




const port=5050;
app.listen(port,()=>{
    console.log(`server connect at ${port}`);
})