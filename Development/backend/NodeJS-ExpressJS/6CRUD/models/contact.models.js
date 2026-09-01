import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2'

// const mongoose = require("mongoose")

const conatactSchema=new mongoose.Schema({
    first_name:{
        type:String
    },
    last_name:{
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    address:{
        type:String
    }

})
conatactSchema.plugin(mongoosePaginate)

const contact=mongoose.model('Contact',conatactSchema)

export default contact;

