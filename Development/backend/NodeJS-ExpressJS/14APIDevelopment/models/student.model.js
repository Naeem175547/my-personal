import mongoose from "mongoose";

const studentSchema=mongoose.Schema({
    first_name:{
        type:String,
        require:true,
        unique:true
    },
    last_name:{
        type:String,
        require:true,        

    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    phone:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    profile_pic:{
        type:String
    }
})

const student=mongoose.model('Student',studentSchema)
export default student;