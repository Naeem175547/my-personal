import  dotenv  from 'dotenv';
import  express  from 'express';
import mongoose from 'mongoose';
dotenv.config()

export const connectDB=()=>{
    mongoose.connect(process.env.MONGO_URL)
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.log(err);
});
}
