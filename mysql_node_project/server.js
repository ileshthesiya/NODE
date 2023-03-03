const express =require ("express")
const mysql = require("mysql")
const cors = require("cors")
require("dotenv/config");
const app=express();

app.use(cors());
app.options("*",cors());
app.use(express.json());

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"admin@123",
    database:"skilldemo",
    port:3306,
});

app.get("/get",(req,res)=>{
    connection.query("select * from user",function(err,rows){
        if(err){
            res.send({error:err})
        }else{
            res.send({Data:rows})
        }
    })
})

app.post("/insert",(req,res)=>{
    let {name,email,position}=req.body;
    let error = false;

    if(name.lenght === 0 || email.lenght === 0 || position === 0){
        error=true;
        res.json("error","Please enter email ,name and position");
    }

    if(!error){
        var formdata={
        name:name,
        email:email,
        position:position}
    }

    connection.query("insert into user set ?", formdata,(err,result)=>{
        if(err){
            res.json({Error:err})
        }else{
            res.json({Success:"User Successfully added"})
        }
    })
})


app.put("/update/:id",(req,res)=>{
    let id=req.params.id;
    let {name,email,position}=req.body;
    let error = false;

    if(name.lenght === 0 || email.lenght === 0 || position === 0){
        error=true;
        res.json("error","Please enter email ,name and position");
    }

    if(!error){
        var formdata={
        name:name,
        email:email,
        position:position}
    }

    connection.query("update user set ? where id= "+ id,
         formdata,(err,result)=>{
        if(err){
            res.json({Error:err})
        }else{
            res.json({Success:"User Successfully Update",result})
        }
    })
})

app.delete("/delete/:id", (req,res) => {
    let id = req.params.id;
 
        connection.query("delete from user where id =" +id, (err,result) => {
            if(err)
            {
                res.json({error : err});
            }
            else
            {
                res.json({success: "user deleted",result});
            }
        });
    
});

connection.connect(function(error){
    if(error){
        console.log(error);
    }else{
        console.log("Database Connected Successfully Done...!");
    }
});



const port=process.env.port || 5500;
app.listen(port,()=>{
    console.log(`Server Connect at ${port}`);
})