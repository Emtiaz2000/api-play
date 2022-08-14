const express = require('express')
const app = express()
const PORT = process.env.PORT || 5005
const route = require('./routes/router')
const connectDB = require('./db/db')

//connecting database
connectDB()

//accepting json
app.use(express.json())
//app.use(express.urlencoded({extended:false}))

app.use('/api',route)

app.listen(PORT,()=>{
    console.log(`website is running at port: ${PORT}`)
})

