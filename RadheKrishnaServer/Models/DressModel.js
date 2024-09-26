const mongoose = require("mongoose")

const dressSchema = new mongoose.Schema({
    dressImage: {
        type: String,
        required: [true, "Dress Image is must required"]
    }
})

const dress = mongoose.model("dress", dressSchema)

module.exports = dress