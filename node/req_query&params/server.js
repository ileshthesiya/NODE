const express=require("express");
const app=express();

app.use(express.json());


// http://localhost:5050/login?uname=admin&upwd=password
// app.get("/login",(req,res)=>{
//     console.log(req.query);
// });

// http://localhost:5050/login/admin/password
app.get("/login/:uname/:upwd",(req,res)=>{
    console.log(req.params.uname);
    console.log(req.params.upwd);
});



const login=require("./login");
app.use("/login",login);


const port=5050;
app.listen(port,()=>{
    console.log(`server connect at ${port}`);
})