import  express  from 'express';
const router=express.Router()
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import User from '../models/user.models.js';
import jwt from 'jsonwebtoken'

dotenv.config()

router.post('/register',async(req,res)=>{
    try{
        const {username,email,password}=req.body
        const existingUser=await User.findOne({$or:[{username}]})
        if (existingUser) {
           return res.status(400).json({ message: 'Username or email already exist' })
        }
        const hasedPassword=await bcrypt.hash(password,10)
        const user=new User({username,email,password:hasedPassword})
        const savedUser=await user.save()
        res.json(savedUser)
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
    
})

router.post('/login',async(req,res)=>{

    try{
        const {username,password}=req.body
    const user=await User.findOne({username})
    if(!user) return res.status(404).json({message:'User not found'})
    
    const isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch) return res.status(400).json({message:'Invalid Credentials'})
    
    const token=jwt.sign(
        {userId:user._id,username:user.username},
        process.env.JWT_SECRET,
        {expiresIn:'1h'}    
    
    )
    res.json({token})
    }
    catch(err){
        res.status(500).json({message:err.message})

    }      


})

router.post('/logout',(req,res)=>{
    res.json({message:'Loggedout successfully..'})
})

export default router



