const express = require('express');
const multer=require("multer");
const router = express.Router();
const category = require('../Models/categoryModel');

router.use(express.json());
router.use(express.urlencoded({extended:true}));

var storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"./upload/post_category");
    },
    filename:function(req,file,cb){
        console.log("File",file);
        cb(null,file.filename+"_"+Date.now()+"_"+file.originalname);
    },
});
var upload=multer({
    storage:storage,
})

router.post('/',upload.array("image",1), async(req, res) => {
    const data={
        name:req.body.name,
        color:req.body.color,
        icon:req.body.icon,
        image:{
            image:req.files,
        },
    }
    await category.create(data,(err,result)=>{
        if(err) throw err;
        else{
            res.send({msg:"Insert Data Into Category Successfully Done",result})
        }
    })
});

router.get('/',async(req, res) => {
        const Category=await category.find({});
        if(!Category) return res.status(500).json("There are no category data");
        res.send({Message:"Category Find Successfully Done",Data:Category})
});

router.get("/:id",async (req,res)=>{
    const Category=await category.findById(req.params.id)
    if(!Category){
        res.status(500).json({msg:"The Category Of Given ID was not found"});
    }
    res.status(200).send(Category)
})

router.put("/:id",async(req,res)=>{
    const Category=await category.findByIdAndUpdate(req.params.id,
        {
            name:req.body.name,
            color:req.body.color,
            icon:req.body.icon
        })
    if(!Category){ return res.status(500).json({message:"The Category with the given Id was not found"})}
    res.send({Category:"Update Category Successfully Done",Category})    
})

router.delete("/:id",async (req,res)=>{
    const Category= await category.findByIdAndDelete(req.params.id)
    if(!Category){ 
        return res.status(500)
        .json({message:"The Category With the Given Id was not found"})}
    res.send({Category:"Category Was Deleted Successfully Done",Category});
})

// DELETE WITH PROMISE 
// router.delete("/:id",(req,res)=>{
//     category.findByIdAndRemove(req.params.id)
//     .then((category)=>{
//         if(category){
//             return res.status(200).json({success:true,message:"The Category is Deleted"})
//         }else{
//             return res.status(404).json({success:false, message:"category Not found"})
//         }
//     })
//     .catch((err)=>{
//         return res.status(500).json({success:false,error:err})
//     })
// })



module.exports = router;