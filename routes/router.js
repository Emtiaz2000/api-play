const route = require('express').Router()
const {getUser,addUser,updateUser,deleteUser} = require('../controler/userControler')

//get all user route 
route.get('/user',getUser )

route.post('/user',addUser)

route.patch('/user/:id',updateUser)

route.delete('/user/:id',deleteUser)

module.exports = route