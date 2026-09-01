import express from 'express';
import mongoose from 'mongoose';
import studentRoute from './routes/student.route.js';
import { connectDB } from './config/database.js';
import { MulterError } from 'multer';
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from "url";
import auth from './middleware/auth.js';
import userRoute from './routes/user.routes.js';
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'



const app = express();
const PORT=process.env.PORT

const fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileName);




// MongoDB Connection

connectDB()


//rate limit
const limiter=rateLimit({
    windowMs:1000*60,
    max:5,
    message:"Too many request fro this IP , please try again later"
})





// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(cors())
// app.use(helmet())
app.use(limiter)
app.use('/api/students',auth)
app.use('/api/users/',userRoute)
app.use('/api/students', studentRoute);

app.use((err,req,res,next)=>{
    if(err instanceof MulterError){
        
       res.status(400).send(`Image error: ${err.message}`);
    }
    else if(err){
        res.status(500).send(`Something went wrong${err.message}`)
    }
    next()
})





// Server
app.listen(PORT, () => {
    console.log("Server running on port 3000");
});