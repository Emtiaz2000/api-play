const mongoose = require('mongoose')

const connectDB = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://api-play:abc12345@api-play.22ve9nx.mongodb.net/?retryWrites=true&w=majority')
        .then(()=>{
            console.log('database is connected')
        })
        
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = connectDB