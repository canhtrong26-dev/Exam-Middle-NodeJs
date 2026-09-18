const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    phone: { type: String, required: true, unique: true },
    status: { type: String, default: "Level 0" },
}, { timestamps: true });


const User = mongoose.model("User", userSchema);

module.exports = User;