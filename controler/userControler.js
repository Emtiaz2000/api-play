const User = require('../server/model')
//get all user
const getUser = async (req,res)=>{
    try {
        const user = await User.find()
        if(user.length>0){
            res.status(201).json({message:"get the user",status:"OK",user})
        }else{
            res.status(404).json({message:"No data Found!"})
        }
    } catch (error) {
        res.status(500).json({message:error.message,status:"error"})
    }
    
}

//register a user
const addUser = async (req,res)=>{
    //console.log(req.body)
try {
    const newUser = new User({
        userName:req.body.userName,
        email:req.body.email,
        createdAt:req.body.createdAt
    })

    await newUser.save()
    res.status(201).json({message:"User Added",status:"OK"})
} catch (error) {
    res.status(404).json({message:error.message,status:"error"})
}
 
}


//update user
const updateUser = async (req,res)=>{
    const id = req.params.id
    try{
        const user = await User.findById({_id:id})
        if(user){
            if(req.body.userName !== ''){
                user.userName = req.body.userName
                await user.save()
            res.status(201).json({message:'User updated',user,status:"OK"})
                
            }
            if(req.body.email !== ''){
                user.email = req.body.email
                await user.save()
            res.status(201).json({message:'User updated',user,status:"OK"})
            }
            
            
        }else{
            res.status(404).json({message:'User not found',status:'error'})
        }

    }catch (error){
        res.status(404).json({message:error.message,status:'error'})
    }

}


//delete user
const deleteUser = async (req,res)=>{
    try {
        const user = await User.findById({_id:req.params.id})
    if(user){
        await user.remove()
        res.status(201).json({message:"User Deleted!",status:"OK"})
    }else{
        res.status(404).json({message:"User not Found!",status:"error"})
    }
    } catch (error) {
        res.status(500).json({message:error.message,status:"error"})
    }
    
}

module.exports ={
    getUser,
    addUser,
    updateUser,
    deleteUser
}