import express from 'express'
import session from 'express-session'
import MongoStore from 'connect-mongo'
const app=express()

app.use(session({
    secret:"mykey", 
    resave:false,
    saveUninitialized:false,
    cookie:{
        maxAge:1000*60*60        
    },
    store:MongoStore.create({
        mongoUrl:'mongodb://127.0.0.1:27017/mySession',
        collectionName:'sessions'
    })

})) 

app.get('/', (req, res) => {
  if(req.session.userName){
    res.send(`<h1>Username from session is : ${req.session.userName}</h1>`);
  }else{
    res.send('<h1>No username found in session.</h1>');
  }
});
app.get('/login',(req,res)=>{
    console.log(req.session)
    req.session.userName="naeem"
    console.log(req.session)
    res.send('<h1>Username has bee set in session.</h1>')
})

app.get('/destroy', (req, res) => {
  req.session.destroy((err) => {
    if(err){
      res.status(500).send('Failed to destroy session')
    }
    res.send('<h1>Session destroy successfully.</h1>');
  })
});

app.listen(3000,()=>{
    console.log("connected")
})