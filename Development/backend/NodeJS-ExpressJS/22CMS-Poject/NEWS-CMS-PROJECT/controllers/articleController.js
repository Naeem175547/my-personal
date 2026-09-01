import categoryModel from '../models/Category.js'
import newsModel from '../models/News.js'
import userModel from '../models/User.js'
import fs from 'fs'
import path from 'path'
import { createError } from '../utils/createError.js'
import { validationResult } from 'express-validator'

const allArticles=async(req,res,next)=>{
    try {
        if(req.role==='admin'){
             const articles = await newsModel.find().populate('category','name').populate('author','fullname');
        console.log(articles)
        res.render('admin/articles',{role:req.role, articles});

        }
        else{
            const articles = await newsModel.find({author:req.userId}).populate('category','name').populate('author','fullname');
        console.log(articles)
        res.render('admin/articles',{role:req.role, articles,errors:[]});

        }
       
        
    } catch (error) {
        console.error('Error fetching articles:', error);        // res.status(500).send('Failed to load articles');
        next(error)
    }
}

const addArticlePage=async(req,res)=>{
    
    const categories=await categoryModel.find()
    res.render('admin/articles/create',{role:req.role,categories,errors:[]})

}
const addArticle=async(req,res,next)=>{
    try {
        console.log(req.body)
        const {title, content, category} = req.body;

        if (!title || !content || !category) {
            return res.status(400).send('Title, content, and category are required');
        }

        if (!req.file || !req.file.filename) {
            return res.status(400).send('Article image is required');
        }

        const article = new newsModel({
            title,
            content,
            category,
            author: req.userId,
            image: req.file.filename
        });

        await article.save();
        res.redirect('/admin/articles');
    } catch (error) {
        console.error('Error adding article:', error);
        next(error);
    }
}


const updateArticlePage=async(req,res,next)=>{
    try {
        const { id } = req.params;
        const article = await newsModel.findById(id).populate('category','name').populate('author','fullname');
        if (!article) {
            return next(createError('Article not found', 404));
        }
        if(req.role=='author'){
            if(req.userId!=article.author._id){
                return res.status(401).send("unathorized")
            }
        }

        const categories = await categoryModel.find();
        res.render('admin/articles/update',{role:req.role, article, categories,errors:[]});
    } catch (error) {
        console.error('Error loading update page:', error);
        next(error);
    }
}

const updateArticle=async(req,res,next)=>{
    const errors = validationResult(req)
            if (!errors.isEmpty()) {
                const categories = await categoryModel.find();
                return res.render('admin/articles/update', { errors: errors.array() ,role:req.role,article:req.body,categories})
            }
    try {
        console.log("-------------------")
        console.log(req.body)
        const { id } = req.params;
        const { title, content, category } = req.body;

        const article = await newsModel.findById(id);
        if (!article) {
            return next(createError('Article not found', 404));
        }

        // Validate required fields (you can relax this if partial updates are allowed)
        if (!title || !content || !category) {
            return res.status(400).send('Title, content, and category are required');
        }


        // Update fields
        article.title = title;
        article.content = content;
        article.category = category;

        // If a new file is uploaded, remove the old file and set new filename
        if (req.file && req.file.filename) {
            try {
                if (article.image) {
                    const oldPath = path.join(process.cwd(), 'public', 'uploads', article.image);
                    // const oldPath = path.resolve('public', 'uploads', article.image);
                    if (fs.existsSync(oldPath)) fs.unlinkSync(oldPath);
                }
            } catch (err) {
                console.error('Failed to remove old image:', err);
            }
            article.image = req.file.filename;
        }

        await article.save();
        res.redirect('/admin/articles');
    } catch (error) {
        console.error('Error updating article:', error);
        next(error);
    }
}

const deleteArticle=async(req,res,next)=>{
    try {
        const { id } = req.params;
        const article = await newsModel.findById(id);
        if (!article) {
            return next(createError('Article not found', 404));
        }
        if(req.role=='author'){
            if(req.userId!=article.author._id){
                // return res.status(401).send("unathorized")
                return next(createError('unathorized',401))
            }
        }

        // Delete image file if it exists
        if (article.image) {
            try {
                const imagePath = path.join(process.cwd(), 'public', 'uploads', article.image);
                if (fs.existsSync(imagePath)) {
                    fs.unlink(imagePath);
                }
            } catch (err) {
                console.error('Failed to remove image:', err);
            }
        }

        await newsModel.findByIdAndDelete(id);
        res.json({success:true})
    } catch (error) {
        console.error('Error deleting article:', error);
        next(error);
    }
}

export default {allArticles,addArticle,addArticlePage,updateArticle,updateArticlePage,deleteArticle};