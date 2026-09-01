import commentModel from "../models/Comment.js";
import News from "../models/News.js";
import { createError } from '../utils/createError.js';



const allComments = async (req,res,next)=>{
    try{
        let comment;
        if(req.role==='admin'){
            comment=await commentModel.find().populate('article','title').sort({createdAt:-1})
        }
        else{
            const news=await News.find({author:req.userId});
            const newsIds=news.map(n=>n._id);
            comment=await commentModel.find({article:{$in:newsIds}}).populate('article','title').sort({createdAt:-1})
       
        }
        res.render('admin/comments',{role:req.role,comments:comment})
    }
    catch(err){
        console.error(err);
       next(createError('Failed to fetch comments',500))
    }

}
const updateCommentStatus = async (req,res,next)=>{
    try{
        const comment=await commentModel.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
        if(!comment){
            return next(createError('Comment not found',404));
        }
        res.json({success:true,message:'Comment status updated successfully',comment})
    }
    catch(err){
        console.error(err);
        next(createError('Failed to update comment status',500))
    }
}

const deleteComment = async (req,res,next)=>{
    try{
        const comment=await commentModel.findByIdAndDelete(req.params.id);
        if(!comment){
            // return res.status(404).json({ message: 'Comment not found' });
            return next(createError('Comment not found',404))
        }
        res.json({success:true,message:'Comment deleted successfully',comment})
    }
    catch(err){
        console.error(err);
        next(createError('Failed to delete comment',500))
    }

}

export default {allComments,updateCommentStatus,deleteComment};