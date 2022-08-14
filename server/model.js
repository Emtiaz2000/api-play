const mongoose = require('mongoose')

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
    }
})

const User = new mongoose.model('User',userSchema)

module.exports = User