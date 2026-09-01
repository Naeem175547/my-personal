import mongoose from 'mongoose';
import { Schema } from 'mongoose';

mongoose.connect("mongodb://127.0.0.1:27017/relationDemo")
.then(() => console.log("connected to db"))
.catch(() => console.log("not connected to db"));

const orderSchema = mongoose.model('Order', userSchema);