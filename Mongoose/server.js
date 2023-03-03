const express=require("express");
const cors=require("cors");
const mongoose=require("mongoose");

const data=require("./data");
const User=require("./usermodel");

// mongoose.set("strictQuery",true);

const app=express();
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin@cluster0.9xjevw2.mongodb.net/books",{
    // useNewUrlParser:true,
    // useUnifiedTopology:true,
})
.then(()=> console.log("Connected"))
.catch((err)=>{console.log(err)})

app.post("/insert_records",(req,res)=>{
    console.log(data.users);
    const result=User.insertMany(data.users);
    res.send(result)
});


app.get("/get",(req,res)=>{
      User.find({},(err,result)=>{
        console.log(result);
        res.send(result)
      })
})

port=3300;
app.listen(port,()=>{
    console.log(`server listen at port ${port}`);
})