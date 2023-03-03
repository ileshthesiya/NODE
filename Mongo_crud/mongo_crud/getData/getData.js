const express=require("express");
getData=express.Router();

const mongodb = require("mongodb");

const url = 'mongodb+srv://admin:admin@cluster0.9xjevw2.mongodb.net/?retryWrites=true&w=majority';
//   const url = 'mongodb://localhost:27017';

const mongoClient = mongodb.MongoClient;


getData.get("/",(req,res)=>{
    console.log("inside getData");

    mongoClient.connect(url,(err,connection)=>{
            if(err) throw err;
            else{
                const db = connection.db("ilesh");
                db.collection("ilesh").find().toArray((err,arr)=>{
                    console.log(arr);
                    res.send(arr);
                })
            }
        })
    });
module.exports=getData;
  