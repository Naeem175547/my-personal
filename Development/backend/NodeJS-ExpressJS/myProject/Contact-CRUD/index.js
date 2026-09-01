import express from 'express'
import { setupDB } from './config/database.js'
import contactRouter from './routes/contact-routes.js'

const app = express()

app.set('view engine','ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))

app.use('/', contactRouter)

setupDB()

app.listen(4000,()=>{
    console.log("server is running on port number 4000")
})