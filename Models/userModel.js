const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator")
const jwtToken = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: [true, "Please fill your full name"]
    },
    address: String,
    phoneNumber: String,
    email: {
        type: String,
        required: [true, "Please enter your email"],
        unique: true,
        validator: [validator.isEmail, "Please Enter a valid Email"]
    },
    password: {
        type: String,
        required: [true, "Please enter your password"],
        minLength: [8, "Password should be greater than 8 characters"],
    },
    repassword: {
        type: String,
        minLength: [8, "Password should be greater than 8 characters"]
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    if (this.password !== this.repassword) {
        return alert("Password not match");
    }
    this.password = await bcrypt.hash(this.password, 10);
})
userSchema.methods.generateToken = function () {
    return jwtToken.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    })
}

module.exports = mongoose.model("User", userSchema);