import mongoose from "mongoose";
const Schema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    image:{
        type:String,
       set:(value)=>value===""?"https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2NlbmVyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60":value    
    },
    price:Number,
    location:String,
    country:String,
})

export default mongoose.model("Listing",Schema)