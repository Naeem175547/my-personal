  import express from "express"
//  const mongoose=require('mongoose')
import ContactRoutes from "./routes/contacts.routes.js"
import {connectDB} from './config/database.js'



 const app=express()
 const PORT=process.env.PORT
 




 //data connection
 connectDB()
 

 //middleware
 app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use("/",ContactRoutes);

app.listen(PORT,()=>{
    console.log(`server in running on port ${PORT}`)
})