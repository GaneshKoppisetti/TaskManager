const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Product name is required"]},
    price: {type: Number, required: [true, "Product price is required"]},
});

module.exports = mongoose.model('Product', productSchema);