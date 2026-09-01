import   mongoose from 'mongoose'
import initData from './data.js'
import Listing from '../models/listing.js'

mongoose.connect('mongodb://127.0.0.1:27017/wandelust').then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log("Database connection failed",err);
})

const initDb=async function(){
    await Listing.deleteMany({})
    await Listing.insertMany(initData.data);
}

initDb().then(()=>{
    console.log("Database initialized");
    process.exit(0);//program ended successfully
}).catch((err)=>{
    console.log("Database initialization failed",err);
    process.exit(1);//program ended with error
})

