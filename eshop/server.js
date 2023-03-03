const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require("cors");
const app = express();
const authJwt = require("./helpers/jwt");
const errorHandler=require("./helpers/error_handler")
require("dotenv/config");
const PORT = process.env.PORT

//cors
app.use(cors());
app.options("*", cors());

//strictQuery
mongoose.pluralize(null);
mongoose.set("strictQuery", true);
app.use(morgan('tiny'))

//json
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Authentication 
app.use(authJwt());
app.use(errorHandler)

// DATABASE
mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected...!'))
    .catch((err) => {
        console.log(err);
    });

// Category 
app.use('/postcategory', require('./routes/category'));
app.use('/getcategory', require('./routes/category'));
app.use('/getcategorybyid',require("./routes/category"))
app.use('/updatecategorybyid',require("./routes/category"))
app.use('/deletecategorybyid',require("./routes/category"));

// Users 
app.use('/postusers', require('./routes/users'));
app.use('/getusers', require('./routes/users'));
app.use("/getusersbyid",require('./routes/users'))
app.use("/updateusersbyid",require('./routes/users'))
app.use("/deleteusersbyid",require('./routes/users'))
app.use("/userlogin",require("./routes/users"))

// Products 
app.use('/postproducts', require('./routes/products'));
app.use('/getproducts', require('./routes/products'));
app.use('/getproductsbyid', require('./routes/products'));
app.use('/updateproductsbyid', require('./routes/products'));
app.use('/deleteproductsbyid', require('./routes/products'))

// Orders 
app.use('/postorders', require('./routes/orders'));
app.use('/getorders', require('./routes/orders'));
app.use('/getordersbyid',require('./routes/orders'))
app.use('/updateordersbyid',require('./routes/orders'))
app.use('/deleteordersbyid',require('./routes/orders'))

// Orderitems 
app.use('/postorderitems', require('./routes/orderitems'));
app.use('/getorderitems', require('./routes/orderitems'));
app.use('/getorderitemsbyid', require('./routes/orderitems'));
app.use('/updateorderitemsbyid', require('./routes/orderitems'));
app.use('/deleteorderitemsbyid', require("./routes/orderitems"))



app.listen(PORT, () => {
    console.log(`Server listening Port : ${PORT}`);
})