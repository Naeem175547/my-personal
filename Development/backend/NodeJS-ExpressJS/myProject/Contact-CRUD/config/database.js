import mongoose from 'mongoose'
export const setupDB=()=>{
    mongoose.connect('mongodb://127.0.0.1:27017/mycontactcurd')
.then(()=>{
    console.log("mongoose is connected to then mongodb successfully")
})
.catch(()=>{
    console.log("database connection failed...");
})
}