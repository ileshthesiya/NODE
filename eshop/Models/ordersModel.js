const mongoose = require('mongoose');

const ordersSchema = new mongoose.Schema({
    orderiterms: [
        {type:mongoose.Schema.Types.ObjectId, ref:"Orderitem", required:true}
    ],
    shippingAddress1: { type: String, required: true },
    shippingAddress2: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    country: { type: String, required: true },
    phone: { type: Number, required: true },
    status: { type: String, required: true,default:"Pending" },
    totalPrice: { type: Number, required: true },
    user: { type: mongoose.Schema.Types.ObjectId,ref:"Users", required: true },
    dateOrdered: { type: Date, default:Date.now() },
});

ordersSchema.virtual("id").get(function () {
    return this._id.toHexString();
});

ordersSchema.set("toJSON", {
    virtuals: true,
})

const orders = mongoose.model('orders', ordersSchema);

module.exports = orders;

/* {
    
    "orderiterms": [
        {
            "quantity":3,
            "product":"63ccebc879fcaddc6208473a"
        },
        {
             "quantity":15,
            "product":"63cfc677e2a2bbc35b1f04bb"
        }
    ],
    "shippingAddress1": "SkillQode",
    "shippingAddress2": "MicraSolution",
    "city": "Surat",
    "zip": "395010",
    "Country": "India",
    "phone": 9499556267,
    "user": "63cfc1679b87f4c040706f9a"
}*/
