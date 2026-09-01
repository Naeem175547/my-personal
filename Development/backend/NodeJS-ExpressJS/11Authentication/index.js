import express from 'express'
import mongoose from 'mongoose';
import User from './models/user.module.js';
import bcrypt from 'bcryptjs'
import session from 'express-session';

const app=express()
//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.set('view engine',"ejs")

app.use(session({
    secret:'secret@123',
    resave:false,
    saveUninitialized:false
}))


//database  connection
mongoose.connect('mongodb://127.0.0.1:27017/user-curd')
.then(()=>console.log("Connected.."))


let checklogin=(req,res,next)=>{
    if(req.session.user){
        next()
    }
    else{
        res.render('login',{error:"login kr le pehle"})
    }
}


app.get('/',checklogin,(req,res)=>{
    res.send(`
        <h1>Homepage</h1><p>hello,
         ${req.session.user}</p>
         <a href="/logout">Logout</a>
         `)

})


app.get('/profile',checklogin,(req,res)=>{
    res.send(`<h1>Homepage</h1><p>hello, ${req.session.user}</p>`)

})

app.get('/login',(req,res)=>{
    if(req.session.user){
        res.redirect('/')
    }
   res.render('login',{error:null});
    
})


app.get('/register',(req,res)=>{
   res.render('register');
    
})


app.get('/logout',(req,res)=>{
    req.session.destroy()
    res.redirect('login',{error:null})
})

app.post('/login',async(req,res)=>{
   const {username,userpassword}=req.body
   const user=await User.findOne({username})
   if(!user) return res.render('login',{error:'user not found'})    
    const isMatch=await bcrypt.compare(userpassword,user.userpassword)
    if(!isMatch) return res.render('login',{error:'Invalid password'})

    req.session.user=username
    res.redirect('/')
})


app.post('/register',async(req,res)=>{
    console.log(req.body)
    const {username,userpassword}=req.body
    const hasedPassword= await bcrypt.hash(userpassword,10)
    console.log(hasedPassword)
    await User.create({username,userpassword:hasedPassword})
    res.redirect('/login')

    
})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});