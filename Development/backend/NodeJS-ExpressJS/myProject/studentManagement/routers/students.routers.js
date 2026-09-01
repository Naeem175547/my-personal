import express from 'express'
import Student from '../models/student.modal.js'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')

    },
    filename:(req,file,cb)=>{
        const name=Date.now()+path.extname(file.originalname)
        cb(null,name)

    }
})

const fileFilter=(req,file,cb)=>{
    if(file.mimetype.startsWith('image')){
        cb(null,true)
    }
    else{
        cb(new Error("file filter not passed"),false)
    }

}
const upload=multer({
    storage:storage,
    limits:{
        fileSize:1024*1024*3
    },
    fileFilter

})


const router=express.Router()
//get all student
router.get('/',async (req,res)=>{
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 3;
    const query = req.query.query || "";

    const skip = (page - 1) * limit;
    try{
        const students=await Student.find({
            $or:[{firstName:{$regex:query,$options:"i"}},{lastName:{$regex:query,$options:"i"}}]
        }).skip(skip).limit(limit)

        const count=await Student.countDocuments()
        const pages=Math.ceil(count/limit)


        res.json({students,currPage:page,pages})



       }
    catch(err){
        res.status(500).send("Internal server error")
    }
    
})

//get one studetn

router.get('/:id',async (req,res)=>{
    try{
        const student=await Student.findOne({_id:req.params.id})
        if(!student){
            res.status(404).json({message:"stduetn not found"})
        return

        }
        res.json(student)

    }
    catch(err){
        res.status(500).send("Internal server error")

    }
})

router.post('/',upload.single('profilePic'),async (req,res)=>{
    if(!req.file) return res.status(400).send("file not uploaded");
    try{
        // const student=req.body;
        const student=new Student(req.body)
        student.profilePic=req.file.filename
        // const result=await Student.create(student)
        const result=await student.save()
        res.send(result)

       }
    catch(err){
        res.status(500).send(`error ${err.message}`)
    }
    
})

router.put('/:id',upload.single('profilePic'),async (req,res)=>{
    const student=await Student.findById(req.params.id)
    if(!student){
        if(req.file){
            fs.unlink(`./upload/${req.file.filename}`,(err)=>{})
        }
         res.status(404).json({message:"stduetn not found"})
        return
    }

    Object.assign(student,req.body)

    if(req.file){
        fs.unlink(`./upload/${student.profilePic}`,(err)=>{
        if(err){
            console.log("file is not updated")
        }
        else{
            console.log("file updated succesfully")
        }
    })
        
        student.profilePic=req.file.filename;
    }
    const result=await Student.findByIdAndUpdate(req.params.id,student, { returnDocument: "after" })
    res.json(result)


})

router.delete('/:id',async (req,res)=>{
    const student=await Student.findByIdAndDelete(req.params.id)
    if(!student){
       res.status(404).json({message:"stduetn not found"})
        return;
    }
    fs.unlink(`./upload/${student.profilePic}`,(err)=>{
        if(err){
            console.log("file is not deleted")
        }
        else{
            console.log("file deleted succesfully")
        }
    })
    res.json(student)

})

export default router

