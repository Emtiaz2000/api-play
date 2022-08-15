const mongoose = require('mongoose')
const fileSchema = new mongoose.Schema({
    fileName:String
})

const FileName = new mongoose.model('FileName',fileSchema)

module.exports = FileName