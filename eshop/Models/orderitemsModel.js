const mongoose = require('mongoose');

const orderitemsSchema = new mongoose.Schema({
    product: { type: mongoose.Schema.Types.ObjectId,ref:"products" },
    quantity: { type: Number, required: true }
});

const orderitems = mongoose.model('orderitems', orderitemsSchema);

module.exports = orderitems;

/* {
    "product": "63c8d30a28f9a8cc8b6f7763",
    "quantity": 1
} */
