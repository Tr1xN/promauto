const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    placement:{
        type: String,
        required: false
    },
    square:{
        type: Number,
        required: false
    },
    height:{
        type: Number,
        required: false
    }
})

let orderModel = mongoose.model('orders', orderSchema)
module.exports = orderModel