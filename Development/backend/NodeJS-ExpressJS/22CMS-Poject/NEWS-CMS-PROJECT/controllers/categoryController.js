
import categoryModel from '../models/Category.js'
import { createError } from '../utils/createError.js'
import {validationResult} from 'express-validator'


const allCategories=async(req,res)=>{
    const categories=await categoryModel.find()
    res.render('admin/categories',{categories,role:req.role})
}

const addCategoryPage=async(req,res)=>{
    res.render('admin/categories/create',{role:req.role,errors:[]})
}
const addCategory = async (req, res, next) => {
    const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.render('admin/categories/create', { errors: errors.array() ,role:req.role})
        }
    try {
       
        await categoryModel.create(req.body);
        res.redirect('/admin/category');
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const updateCategoryPage=async(req,res,next)=>{
    try {
        const id=req.params.id;
        const category=await categoryModel.findById(id);
        if(!category){
            return  next(createError('category not found',404))
        }

        res.render('admin/categories/update',{category,role:req.role,errors:[]})
    } catch (err) {
        console.error(err);
        next(err);
    }
}

const updateCategory=async(req,res,next)=>{
    const id=req.params.id;

    const errors = validationResult(req)
        if (!errors.isEmpty()) {
            const category=await categoryModel.findById(id);
            return res.render('admin/categories/update', { errors: errors.array() ,role:req.role,category})
        }
    try {
        const category = await categoryModel.findById(id);
        if (!category) {
            return next(createError('category not found', 404));
        }
        Object.assign(category, req.body);
        await category.save();
        res.redirect('/admin/category');
    } catch (err) {
        console.error(err);
        next(err);
    }
}
const deleteCategory=async(req,res,next)=>{
    try {
        const id = req.params.id;
        const category = await categoryModel.findById(id);
        if (!category) {
            return next(createError('category not found', 404));
        }
        const articles = await newsModel.find({ category: id });
        // if(articles.length>0){
        //     return res.status(400).json({success:false,message:'Cannot delete category with associated articles'}); 
        // }
        await category.deleteOne();
        res.json({success:true});
    } catch (err) {
        console.error(err);
        next(err);
    }
}

export default {allCategories,addCategory,addCategoryPage,updateCategory,updateCategoryPage,deleteCategory};