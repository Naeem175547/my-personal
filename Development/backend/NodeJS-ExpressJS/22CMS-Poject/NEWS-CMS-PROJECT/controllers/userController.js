import userModel from '../models/User.js'
import newsModel from '../models/News.js'
import categoryModel from '../models/Category.js'
import settingModel from '../models/setting.js'

import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
import { createError } from '../utils/createError.js'
import  {validationResult} from 'express-validator'
import fs from 'fs'
import path from 'path'



const loginPage=async (req,res)=>{
    res.render('admin/login',{
        layout:false,
        errors:[]
    })
}


const adminLogin = async (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {

        return res.render('admin/login', {
            layout: false,
            errors: errors.array()
        });

    }

    const { username, password } = req.body;

    try {

        const user = await userModel.findOne({ username });

        // user not found
        if (!user) {

            return next(createError('Unauthorized', 401));

        }

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {

            return next(createError('Invalid credentials', 401));

        }

        // JWT payload
        const jwtData = {
            id: user._id,
            fullname: user.fullname,
            role: user.role
        };

        // generate token
        const token = jwt.sign(
            jwtData,
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        );

        // save cookie
        res.cookie('token', token, {
            httpOnly: true,
            maxAge: 60 * 60 * 1000
        });

        res.redirect('/admin/dashboard');

    } catch (error) {

        console.log(error);

        next(error);

    }
}




const logout=async (req,res)=>{
    res.clearCookie('token')
    res.redirect('/admin')

}

const dashboard=async (req,res,next)=>{
    try {
        let articlesCount;
        if(req.role==='author'){
            articlesCount=await newsModel.countDocuments({author:req.userId})

        }
        else{
             articlesCount=await newsModel.countDocuments()

        }
        const categoriesCount=await categoryModel.countDocuments();
        const usersCount=await userModel.countDocuments();

        res.render('admin/dashboard',{
            role:req.role,
            fullname:req.fullname,
            articlesCount,
            categoriesCount,
            usersCount
        })
    } catch (error) {
        console.error(error)
        next(error)
    }
}

const settings=async (req,res,next)=>{
    try {

        const settings=await settingModel.findOne()
        res.render('admin/setting',{role:req.role,settings})
    } catch (error) {
        console.error(error)
        next(error)
    }
}

const saveSettings = async (req, res, next) => {

    const { website_title, footer_description } = req.body;
    const website_logo = req.file
        ? req.file.filename
        : null;

    try {
        let settings = await settingModel.findOne();
        if (!settings) {
            settings = new settingModel();
        }
        settings.website_title = website_title;
        if (website_logo) {
            const LogoPath = path.join('public', 'uploads', settings.website_logo);
            if (fs.existsSync(LogoPath)) {
                fs.unlinkSync(LogoPath);
            }
            settings.website_logo = website_logo;
        }
        settings.footer_description = footer_description;


        await settings.save();
        res.redirect('/admin/settings');

    } catch (error) {
        console.error(error);
        next(error);

    }
}

const allUsers = async (req,res)=>{
   
    const users=await userModel.find()
    res.render('admin/users',{users,role:req.role})   

}

const addUserPage = async (req,res)=>{
    res.render('admin/users/create',{role:req.role,errors:[]})
}
const addUser = async (req,res)=>{
     console.log('working')
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        console.log('validaton fails')
        return res.render('admin/users/create', { errors: errors.array() ,role:req.role})
    }
    // console.log(req.body)
    await userModel.create(req.body)
   res.redirect('/admin/users');
}


const updateUserPage = async (req,res,next)=>{
    try{
        const id=req.params.id
        const user=await userModel.findById(id)
        if(!user) return res.status(400).send("user not found")
        res.render('admin/users/update',{user,role:req.role,errors:[]})
    }catch(err){
        console.error(err)
        next(err)
    }    
}


const updateUser = async (req, res, next) => {
    const id = req.params.id;
     const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.render('admin/users/update', { user:{...req.body,id:id},errors: errors.array() ,role:req.role})
    }
    const { fullname, username, password, role } = req.body; 


    try {
        const user = await userModel.findById(id);
        if (!user) {
            return res.status(404).send('User not found');        }

        // ✅ update only if new value is provided
        user.fullname = fullname || user.fullname;
        user.role     = role     || user.role;  // ✅ was overwriting with undefined if role missing

        // ✅ password only updated if provided — pre-save hook will hash it automatically
        if (password) {
            user.password = password;
        }

        await user.save();  
        res.redirect('/admin/users');

    } catch (err) {
        console.error(err);
        next(err);
    }
}



const deleteUser = async (req,res,next)=>{
    const id=req.params.id
    try{
        const user=await userModel.findById(id)
        if(!user){
            next(createError('user not found',404))
            return
        }

        const articles=await newsModel.find({author:id})
        if(articles.length>0){
            return res.status(400).json({success:false,message:'Cannot delete user with associated articles'}); 
        }
        await user.deleteOne()
        res.json({success:true})
    }
    catch(err){
            console.log(err)
            next(err)
    }
}


 

export  default {allUsers,addUser,addUserPage,updateUser,updateUserPage,deleteUser ,loginPage,adminLogin,logout,dashboard,settings,saveSettings};