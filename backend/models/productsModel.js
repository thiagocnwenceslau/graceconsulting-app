const mongoose = require('mongoose');

const Schema  = mongoose.Schema;

let productSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    date: Date
})

module.exports = mongoose.model('productsModel', productSchema, 'products');