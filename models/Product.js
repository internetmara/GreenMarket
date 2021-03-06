const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    rate: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    coordsLat: {
        type: Number,
        required: true
    },
    coordsLng: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    picture: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Product = mongoose.model('products', ProductSchema);
module.exports = Product;