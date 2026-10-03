const mongoose = require("mongoose")

const AdminSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    lastname:{
        type: String,
        required:true,
        trim:true
    },
    age: {
        type: Number,
        required: false
    },
    city: {
        type: String,
        required: true,
        trim: true
    },
    phone: {
        type: String,
        required: false,
        trim: true
    },
})

module.exports = mongoose.model("Admin", AdminSchema)