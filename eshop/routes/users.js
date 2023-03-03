const express = require('express');
const router = express.Router();
const jwt=require("jsonwebtoken")
const users = require('../Models/usersModel');
const bcrypt=require("bcrypt");

router.use(express.json());
router.use(express.urlencoded({extended:true}));


router.post('/', (req, res) => {
    const data={
        name:req.body.name,
        email:req.body.email,
        passwordHash:bcrypt.hashSync(req.body.passwordHash,10),
        street:req.body.street,
        apartment:req.body.apartment,
        city:req.body.city,
        zip:req.body.zip,
        country:req.body.country,
        phone:req.body.phone,
        isAdmin:req.body.isAdmin,
    }
    users.create(data,(err,result)=>{
        if(err) throw err;
        else{
            res.send({msg:"Insert Data Into Users Successfully Done",result})
        }
    })
});

router.get('/', (req, res) => {
    users.find({}, (err, result) => {
        if (err) throw err;
        else {
            res.send(result);
        }
    });
});

router.get("/:id",async (req,res)=>{
    const Users= await users.findById(req.params.id)
    if(!Users) return res.status(500).json("User is not found")
    res.send({message:"Find User by Id successfully Done",Users})
})

router.put("/:id",async(req,res)=>{
    const Users=await users.findByIdAndUpdate(req.params.id,{
        name:req.body.name,
        email:req.body.email,
        passwordHash:req.body.passwordHash,
        street:req.body.street,
        apartment:req.body.apartment,
        city:req.body.city,
        zip:req.body.zip,
        country:req.body.country,
        phone:req.body.phone,
        isAdmin:req.body.isAdmin
    })
    if(!Users){ return res.status(500).json({message:"The Category with the given Id was not found"})}
    res.send({Users:"Update Category Successfully Done",Users})
})

router.delete("/:id",async(req,res)=>{
    const Users=await users.findByIdAndDelete(req.params.id);
    if(!Users) return res.status(500).send({message:"The Users with the given Id was not found"});
    res.send({Message:"Delete Users Successfully Done",Users})
})  

// router.post("/login", async (req, res) => {
//     const User = await users.findOne({ email: req.body.email });
//     const secret = process.env.SECRET;
//     if (!User) {
//         return res.status(400).send("The user not found");
//     }
//     if (User && bcrypt.compareSync(req.body.password, User.passwordHash)) {
//         const token = jwt.sign(
//             {
//                 userId: User.id,
//                 isAdmin: User.isAdmin,
//             },
//             secret, { expiresIn: "1d" }
//         );
//     res.status(200).send({ user: User.email, token: token });
//     }
//     else {
//         res.status(400).send("Password is worng....!");
//     }
// });

router.post("/login", async (req, res) => {
    const User = await users.findOne({ email: req.body.email });
    const secret = process.env.SECRET;
    // res.send({User})
    if (!User) {
        return res.status(400).send({Message:"The user not found"});
    }
    if (User && bcrypt.compareSync(req.body.password, User.passwordHash)) {
        const token = jwt.sign(
            {
                userId: User.id,
                isAdmin: User.isAdmin,
            },secret, { expiresIn: "1d" });
        
        res.status(200).send({ User: User.email, token: token });
    }
    else {
        res.status(400).send("Password is wrong....!");
    }
});
module.exports = router;