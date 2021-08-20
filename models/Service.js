const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ServiceSchema = new Schema({
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
    rateIncrement: {
        type: String,
        required: true
    },
    description: {
        type: String,
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

const Service = mongoose.model('services', ServiceSchema);
module.exports = Service;