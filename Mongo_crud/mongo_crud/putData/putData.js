const express=require("express");
const putData=express.Router();

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const url = 'mongodb+srv://admin:admin@cluster0.9xjevw2.mongodb.net/?retryWrites=true&w=majority';
// const url = 'mongodb://localhost:27017';



putData.put("/",(req,res)=>{
    console.log("inside putData");

    MongoClient.connect(url,(err,connection)=>{
            if(err) throw err;
            else{
                const db = connection.db("ilesh");
                db.collection("ilesh").updateOne(
                  {fname:req.body.fname},
                  {$set:{lname:req.body.lname}},
                  (err,arr)=>{
                    console.log(arr);
                    res.send(arr);
                })
            }
        })
    });
module.exports=putData;