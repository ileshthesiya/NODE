
  
const express=require("express");
const deleteData=express.Router();

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

const url = 'mongodb+srv://admin:admin@cluster0.9xjevw2.mongodb.net/?retryWrites=true&w=majority';
// const url = 'mongodb://localhost:27017';



deleteData.delete("/",(req,res)=>{
    console.log("inside deleteData");

    MongoClient.connect(url,(err,connection)=>{
            if(err) throw err;
            else{
                const db = connection.db("ilesh");
                db.collection("ilesh").deleteOne(
                  {fname:req.body.fname}),
                  (err,result)=>{
                    if(err) throw err;
                    else{
                      res.send(result);
                    }
                }
            }
        })
    });
module.exports=deleteData;