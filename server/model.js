const mongoose = require('mongoose')
const FileName = require('./fileModel')

const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true
    },
    email:{
            type:String,
            required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    image:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"FileName"
    }
})

const User = new mongoose.model('User',userSchema)

module.exports = User