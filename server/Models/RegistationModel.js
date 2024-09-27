const mongoose = require("mongoose");

const RegistationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    whatsappNumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true
    }
},{
    timestamps: true // Adds createdAt and updatedAt fields
});

const RigistatonModel = mongoose.model("Registation", RegistationSchema);

module.exports = RigistatonModel;
