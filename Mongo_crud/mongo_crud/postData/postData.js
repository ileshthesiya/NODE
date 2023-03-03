const express=require("express");
const postData=express.Router();

const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const url = 'mongodb+srv://admin:admin@cluster0.9xjevw2.mongodb.net/?retryWrites=true&w=majority'
//   const url = 'mongodb://localhost:27017';

postData.post("/",(req,res)=>{  
  console.log("inside postData");
  console.log(req.body);
    mongoClient.connect(url,(err,connection)=>{
            if(err) throw err;
            else{
                const db = connection.db("ilesh");
                db.collection("ilesh").insertOne({
                  "fname":req.body.fname,
                  "lname":req.body.lname
                },(err,result)=>{
                  if(err) throw err;
                  else{
                      res.send(result);
                  }
                })
              
            }
        })
    });
module.exports=postData;