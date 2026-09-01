import express from 'express'
import Student from './models/student.modal.js'
import dbConfig from './config/database.js'
import router from './routers/students.routers.js'
import userRouter from './routers/user.router.js'
import cors from 'cors'
import auth from './middleware/auth.js'


const app=express()
//dbConfig
dbConfig()


//middleware

app.use('/images', express.static('uploads'))
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use('/api/students',auth)
app.use('/api/students',router)

app.use('/api/users',userRouter)







app.listen(5000,()=>{
    console.log("server conneted successfully")
})