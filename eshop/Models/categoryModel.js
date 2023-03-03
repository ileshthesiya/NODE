const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    name: { type: String, required: true },
    color: { type: String, required: true },
    icon: { type: String, required: true },
    image: { type: Array, }
});

const category = mongoose.model('category', categorySchema);

module.exports = category;


/* {
    "name": "Laptop",
    "color": "Black",
    "icon": "path",
    "image": "path"
} */