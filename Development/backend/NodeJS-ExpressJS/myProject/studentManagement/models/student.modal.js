import mongoose from 'mongoose'
const studentSchema=mongoose.Schema({
    firstName:{
        type:String,
        unique:true,
        required:true

    },
    lastName:{
        type:String
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    phone:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true

    },
    profilePic:{
        type:String
    }

})

const Student=mongoose.model('students',studentSchema);
export default Student