
import Category from "../models/Category.js";
import News from "../models/News.js";
import User from "../models/User.js";
import Comment from "../models/Comment.js";
import Setting from '../models/setting.js'
import paginate from '../utils/paginate.js'
import { create } from "node:domain";


const index = async (req, res) => {
    // const news =await News.find()
    // .populate('category','name slug')
    // .populate('author','fullname')
    // .sort({date:-1})

    const paginateNews=await paginate(News,{},req.query,
        {populate:
            [
                {path:'category',select:'name slug'}
                ,{path:'author',select:'fullname'}
            ],sort:{date:-1}})

    res.render('frontend/index',{paginateNews,query:req.query})

    // const settings=await Setting.findOne();
    // console.log(settings)
    // const latestNews=await News.find().sort({date:-1}).limit(5)
    // .populate('category','name slug')
    // .populate('author','fullname').
    //  sort({date:-1})


    // const categoriesInUse=await News.distinct('category')
    // const categories=await Category.find({_id:{$in:categoriesInUse}})    
    //these line was same in all controller so we we make common middleware
    // res.render('frontend/index',{news})
}
const articleByCategories = async (req, res,next) => {    
    const category=await Category.findOne({slug:req.params.slug})   
    if(!category){
         
        return next(new createError('Category not found',404))
    
    }
     const paginateNews=await paginate(News,{category:category._id},req.query,
        {populate:
            [
                {path:'category',select:'name slug'}
                ,{path:'author',select:'fullname'}
            ],sort:{date:-1}})
               
    res.render('frontend/category',{paginateNews,category,query:req.query})
}
const singleArticle = async (req, res,next) => {
    const news =await News.findById(req.params.id)
    .populate('category','name')
    .populate('author','fullname')
    .sort({date:-1})

    if(!news){
        return next(new createError('Article not found',404))
    }

    const comments=(await Comment.find({article:req.params.id, status: 'approved'})).toSorted((a,b)=>b.createdAt-a.createdAt)
    console.log(comments)   
    res.render('frontend/single',{news,comments})



}

const search = async (req, res, next) => {
    try {

        const searchQuery = req.query.search;
        if (!searchQuery) {
            return res.redirect('/');
        }
        // const news = await News.find({
        //     $or: [
        //         { title: { $regex: searchQuery, $options: 'i' } },
        //         { content: { $regex: searchQuery, $options: 'i' } }
        //     ]
        // })
        // .populate('category', 'name slug')
        // .populate('author', 'fullname')
        // .sort({ date: -1 });
       
        // res.render('frontend/search', {
        //     news,
        //     searchQuery
        // });

         const paginateNews=await paginate(News,{ $or: [
                 { title: { $regex: searchQuery, $options: 'i' } },
                 { content: { $regex: searchQuery, $options: 'i' } }
             ]},req.query,
        {populate:
            [
                {path:'category',select:'name slug'}
                ,{path:'author',select:'fullname'}
            ],sort:{date:-1}})

            res.render('frontend/search', {
                paginateNews,
                searchQuery,
                query:req.query
            });

    } catch (error) {
        next(error);
    }
};
const author=async (req,res,next)=>{
    const author=await User.findById(req.params.id)
    if(!author){
        
        return next(new createError('Author not found',404))
    
    }

     const paginateNews=await paginate(News,{author:req.params.id},req.query,
        {populate:
            [
                {path:'category',select:'name slug'}
                ,{path:'author',select:'fullname'}
            ],sort:{date:-1}})
   
    res.render('frontend/author',{paginateNews,author,query:req.query})
}

const addComment = async (req, res,next) => {

    const { name, email, content } = req.body;

    try {

        const comment = new Comment({
            article: req.params.id,
            name,
            email,
            content
        });

        await comment.save();

        res.redirect(`/single/${req.params.id}`);

    } catch (err) {

         
        return next(new createError('Article not found',404))
    

    }
}

const testing=async (req,res)=>{
    res.send('testing'.repeat(30));
}



const siteController={
    index,
    articleByCategories,
    singleArticle,
    search,
    author,
    addComment,
    testing

}


export default siteController;
