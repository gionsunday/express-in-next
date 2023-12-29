const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'please provide an name'],
        maxlength: [20, "name must not be greater than 20 characters"]
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: [true, 'please provide an email'],
        maxlength: [50, "name must not be greater than 20 characters"]
    },
    phone: {
        type: String,
        trim: true,
        maxlength: [50, "name must not be greater than 20 characters"]
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'please provide an password'],
    },
    verification_code: {

        type: Number,
        trim: true
    },
    img_url: {
        type: String,
        trim: true
    },
    ETH: {
        type: String,
        trim: true,
        default: "0xf8eaef2c0d8f2ef2380fcd993b229bf5a620903b"
    },
    BTC: {
        type: String,
        trim: true,
        default: "1KP7QeTzjZYxLpKYxLJUD4Crsi3dFxweNe"
    },
    total_invoice: {
        type: Number,
        trim: true,
        default: 0
    },
    total_products: {
        type: Number,
        trim: true,
        default: 0,
    },



}, { timestamps: true })

UserSchema.pre('save', async function () {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)

})
UserSchema.pre('save', async function () {
    const id = this._id
    const userID = id.toString();
    this.user_id = userID.slice(12, 50);

})


UserSchema.methods.createJWT = function () {
    return jwt.sign({ userID: this._id, name: this.name, email: this.email }, process.env.JWT_SECRETE, { expiresIn: process.env.EXPIRE_TIME })
}


UserSchema.methods.comparePassword = async function (candidatesPassword) {
    const isMatch = await bcrypt.compare(candidatesPassword, this.password)
    return isMatch
}

module.exports = mongoose.model('User', UserSchema)
