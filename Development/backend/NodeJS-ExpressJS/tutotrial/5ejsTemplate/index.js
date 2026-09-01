// const express =require('express') or
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

app.set('view engine', 'ejs')//configuration
app.set('views', path.join(__dirname, '../views'))//so specifying path if index.js in not in root
app.use(express.urlencoded({extended:true}))//middle ware for form data
app.set(express.static('../public'))//this will allow to add static files in ejs file
app.listen(3000, () => {
    console.log("server started on port 3000...")
})

app.get('/',(req,res)=>{
    res.send("<p>Homepage</p>")
})

app.get('/about', (req, res) => {
    const items=["Apple","Banana","Cherry"]
    const users=[
        {name:"A",age:20,city:"bijnor"},
        {name:"B",age:10,city:"lucknow"}
    ]
    res.render('profile',{title:'About page', message:"Welcome to EJS!",items:items,users})
})

app.get("/form",(req,res)=>{
    res.render("form",{message:""})
})

app.post('/submit',(req,res)=>{
    console.log(req.body)
    const name=req.body.myname
    const message=`Hello, ${name} You submitted the from.`;
    // res.send(message);
    res.render('form',{message:message})

})