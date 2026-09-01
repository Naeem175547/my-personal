 import mongoose from 'mongoose'
 import dotenv from 'dotenv'
 dotenv.config()
 const mongoURL=process.env.mongoURL;
 const dbConfig=()=>{
    mongoose.connect(`${mongoURL}`)
.then(()=>console.log("db connected successfully"))
.catch(()=>console.log("db connection failed"))
}

export default dbConfig