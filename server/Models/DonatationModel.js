const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    whatsapp: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    message: {
        type: String,
        required: true,
    }
}, {
    timestamps: true // Adds createdAt and updatedAt timestamps
});

const Donation = mongoose.model("Donate", donationSchema);

module.exports = Donation;
