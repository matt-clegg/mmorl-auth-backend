const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 3,
        max: 14
    },
    email: {
        type: String,
        required: true,
        min: 3,
        max: 256
    },
    password: {
        type: String,
        required: true,
        min: 8,
        max: 512
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    lastLogin: {
        type: Date,
    }
});

module.exports = mongoose.model("User", userSchema);