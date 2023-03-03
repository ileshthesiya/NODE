const express=require("express");
const app=express();

app.use(express.json());
app.use(express.urlencoded());

app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"/index.html");
})

app.post("/login",(req,res)=>{
    const request=req.body;
    console.log("Data",request);
})

app.get("/",(req,res)=>{
    res.json({msg:"Hello from get"});
})

// app.get("/login",(req,res)=>{
//     res.json({msg:"Hello From Login get"});
// })

// app.post("/login",(req,res)=>{
//     res.json({msg:"hello from login post"})
// })

const  port=1000
app.listen(port,()=>{
    console.log(`server connect at port ${port}`);
})