import mongoose from "mongoose"
import mongoosePaginate from 'mongoose-paginate-v2'

const schema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    age:Number,
    email:String,
    phone:String,
    address:String
})
schema.plugin(mongoosePaginate);

const Contact = mongoose.model('student_contacts', schema)


export default Contact