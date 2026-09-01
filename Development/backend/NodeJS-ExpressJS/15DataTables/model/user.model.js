import mongoose from "mongoose";

const schema=mongoose.Schema({
    name:{
        type:String
    },
    age:String,
    course:String
})

const User=mongoose.model('User',schema,'student')
export default User