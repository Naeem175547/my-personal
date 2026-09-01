import express from 'express';
import Student from '../models/student.model.js';
import path from 'node:path';
import multer from 'multer';
import fs from 'fs'


const router = express.Router();

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'./uploads')
    },
    filename:(req,file,cb)=>{
        const newFileName=Date.now()+path.extname(file.originalname)
        cb(null,newFileName)
    }
})

const fileFilter=(req,file,cb)=>{
    if(file.mimetype.startsWith('image/')){
        cb(null,true)
    }
    else{
        cb(new Error("only images are allowed"),false)
    }
    }
const upload=multer({
    storage:storage,
    fileFilter,
    limits:{
        fileSize:1024*1024*3
    }

})


// Get all students
//http://localhost:3000?page1&limit=5
router.get('/', async (req, res) => {
    try {
        const search=req.query.search || ''
        const page=parseInt(req.query.page) || 1
        const limit=parseInt(req.query.limit) || 5
        const skip=(page-1)*limit;     




        const query={
            $or:[
                {first_name:{$regex:search,$options:'i'}},
                {last_name:{$regex:search,$options:'i'}}
            ]
        }
        const total=await Student.countDocuments(query)
        const students = await Student.find(query).skip(skip).limit(limit);
        res.json({
            students,
            total,
            page,
            limit,
            totalPages:Math.ceil(total/limit)
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Get single student
router.get('/:id', async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(student);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Add new student
router.post('/', upload.single('profile_pic'), async (req, res) => {
    try {
        const student = new Student(req.body);//new Student() is used to create a new document/object from your Mongoose model
        if (req.file) {
            student.profile_pic = req.file.filename;
        }
        const newStudent = await student.save();
        // new Student() + save() //save() saves data to databse
        res.status(201).json(newStudent);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update student
router.put('/:id',upload.single('profile_pic'), async (req, res) => {
    try {
        const existingStudent=await Student.findById(req.params.id)
        if(!existingStudent){
            if(req.file){//this is becuase if id is not valid or db error occurs then also it will store img
                const filePath=path.join('./uploads',req.file.filename)
            fs.unlink(filePath,(err)=>{
                console.log("Failed to Delte:",err)

            })              


            }
            return  res.status(404).send({message:"not found"})
        }
        if(req.file){
            if(existingStudent.profile_pic){
                const filePath=path.join('./uploads',existingStudent.profile_pic)
                fs.unlink(filePath,(err)=>{
                console.log("Failed to Delte uploaded file:",err)

            })
            
            }
            req.body.profile_pic=req.file.filename
        }
        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.json(updatedStudent);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


// Delete student
router.delete('/:id', async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });   
        }
        if(student.profile_pic){
            const filePath=path.join('./uploads',student.profile_pic)
            fs.unlink(filePath,(err)=>{
                console.log("Failed to Delte:",err)

            })

        }


        res.json({ message: 'Student Deleted Successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

export default router;