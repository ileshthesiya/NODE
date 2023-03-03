const express = require('express');
// const mongoose = require('mongoose');
const router = express.Router();
const orderitems = require('../Models/orderitemsModel');

router.use(express.json());
router.use(express.urlencoded({extended:true}));


router.post('/', (req, res) => {
    const data={
        product:req.body.product,
        quantity:req.body.quantity
    }
    orderitems.create(data,(err,result)=>{
        if(err) throw err;
        else{
            res.send({msg:"Insert Data Into Orderitems Successfully Done",result})
        }
    })
});

router.get('/', (req, res) => {
    orderitems.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        }
    });
});

router.get('/:id',async (req,res)=>{
    const Orderitems=await orderitems.findById(req.params.id)
    if(!Orderitems) return res.status(500).json("OrderItems Was Not Found");
    res.send({Message:"OrderItems Found Successfully Done",Orderitems})
})

router.put("/:id",async (req,res)=>{
    const Orderitems=await orderitems.findByIdAndUpdate(req.params.id,{
        product:req.body.product,
        quantity:req.body.quantity
        });
    if(!Orderitems){ return res.status(500).json({message:"The OrderItems with the given Id was not found"})}
    res.send({Message:"Update Orderitem Successfully Done",Orderitems})
})

router.delete("/:id",async(req,res)=>{
    const Orderitem=await orderitems.findByIdAndDelete(req.params.id);
    if(!Orderitem) return res.status(500).send({message:"The Orderitems with the given Id was not found"});
    res.send({Message:"Delete Orderitems Successfully Done",Orderitem})
})

module.exports = router;