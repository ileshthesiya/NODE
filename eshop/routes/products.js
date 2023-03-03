const express = require('express');
const router = express.Router();
const category=require("../Models/categoryModel")
const products = require('../Models/productsModel');

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.post('/', (req, res) => {
    const Category=category.findById(req.body.category);
    if(!Category) return res.status(400).send("Invalid Category")
    // let product=new Products({
        
    //     name:req.body.name,
    //     description:req.body.description,
    //     richdescription:req.body.richdescription,
    //     image:req.body.image,
    //     images:req.body.images,
    //     brands:req.body.brands,
    //     price:req.body.price,
    //     category:req.body.category,
    //     countInStock:req.body.countInStock,
    //     rating:req.body.rating,
    //     isFeatured:req.body.isFeatured,
    // })
    // product=product.save();
    // if(!product) return res.status(500).send("The product cannot be created")
    // res.send({product})

    const data={
        name:req.body.name,
        description:req.body.description,
        richdescription:req.body.richdescription,
        image:req.body.image,
        images:req.body.images,
        brands:req.body.brands,
        price:req.body.price,
        category:req.body.category,
        countInStock:req.body.countInStock,
        rating:req.body.rating,
        isFeatured:req.body.isFeatured,
    }
    products.create(data,(err,result)=>{
        if(err) throw err;
        else{
            res.send({msg:"Insert Data Into Product Successfully Done",result})
        }
    })
});

// router.get('/', (req, res) => {
//     products.find({}, (err, result) => {
//         if (err) throw err;
//         else {
//             res.send(result);
//         }
//     });
// });

router.get("/",async (req,res)=>{
    const Products= await products.find({}).populate("category")
    res.send(Products)
});

router.get("/:id",async(req,res)=>{
    const Products=await products.findById(req.params.id)
    if(!Products) return res.status(500).json("Product Was Not Found")
    res.send({message:"Product Successfully find",Products})
})

router.put("/:id",async(req,res)=>{
    const Products=await products.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        description:req.body.description,
        richdescription:req.body.richdescription,
        image:req.body.image,
        images:req.body.images,
        brands:req.body.brands,
        price:req.body.price,
        category:req.body.category,
        countInStock:req.body.countInStock,
        rating:req.body.rating,
        isFeatured:req.body.isFeatured
    })
    if(!Products) return res.status(500).send({Message:"Can't find Products with given id"})
    res.send({Message:"Update Category Successfully Done",Products})
})

router.delete("/:id",async(req,res)=>{
    const Products=await products.findByIdAndDelete(req.params.id);
    if(!Products) return res.status(500).send({message:"The products with the given Id was not found"});
    res.send({Message:"Delete products Successfully Done",Products})
})  

module.exports = router;