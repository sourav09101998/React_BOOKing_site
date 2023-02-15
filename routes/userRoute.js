const express = require("express");
const User = require("../models/user")
const router = express.Router();

router.post('/register',async(req,res) =>{
    const newuser =new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        phoneNumber:req.body.phoneNumber,
        address:req.body.address,
        pinCode:req.body.pinCode,
        DOB:req.body.DOB
    })
    try{
        const user =await newuser.save()
        res.send(user)
    }catch (error){
        return res.status(400).json({error})
    }
})

router.post('/login', async (req,res) =>{
    const {email, password} = req.body

    try{
        const user=await User.findOne({email:email,password:password})
        if(user)
            {
                const temp={
                    name:user.name,
                    email:user.email,
                    isAdmin:user.isAdmin,
                    _id : user._id,
                }
                res.send(temp)
            }
            else{
                return res.status(400).json({message: 'Login failed'})
            }
    }catch (error){
        return res.status(400).json({error})
    }
})

router.get('/getallusers',async(req,res)=>{
    try {
        const user =await User.find()
        res.send(user)        
    } catch (error) {
        return res.status(400).json({error: {
            message: error.message,
        },})
    }
} )

module.exports=router