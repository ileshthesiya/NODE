const express=require("express");
const app=express();
app.use(express.json());
const port=5500;

const getData=require("./getData/getData");
app.use("/getData",getData);

const postData=require("./postData/postData");
app.use("/postData",postData);

const putData=require("./putData/putData");
app.use("/putData",putData);

const deleteData=require("./deleteData/deleteData");
app.use("/deleteData",deleteData);

app.listen(port,()=>{
    console.log(`server listen successfully at port:${port}`);
});