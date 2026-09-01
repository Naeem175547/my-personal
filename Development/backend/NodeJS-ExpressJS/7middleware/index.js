import express from 'express'
const app=express()
const Router=express.Router()

//middle ware

//application level middle ware
// app.use((req,res,next)=>{
//     console.log("Hello from middleware")
//     const d=new Date()
//     console.log(`${req.method} ${req.url}`)
//     console.log(`${d.getDate()} ${d.getMonth()}`)    
//     next()
// })
//or

const middleware= (req,res,next)=>{
     console.log("Hello from middleware")
     const d=new Date()
     console.log(`${req.method} ${req.url}`)
     console.log(`${d.getDate()} ${d.getMonth()}`)    
     next()
 }
//  app.use(middleware)//use apply it globally

// app.get('/',(req,res)=>{
//     res.send("<h1>hello</h2")
// })
// app.get('/about',middleware,(req,res)=>{//this will apply only for /about url
//     res.send("<h1>about page</h2")
// })

//-->Router middleware

//  Router.use(middleware)//This applies middleware to all routes inside Router.

// Router.get('/',(req,res)=>{
//     res.send("<h1>hello</h2")
// })
// Router.get('/about',(req,res)=>{//this will apply only for /about url
//     res.send("<h1>about page</h2")
// })
// app.use('/',Router)

//-->Error handing middleware


// app.get('/',(req,res)=>{
//     res.snd("<h1>hello</h2")//error
    
// })
// app.use((req,res)=>{//this middleware will run when route is found.
//     res.send("<h1>page Not found.</h1>")
// })
// app.use((err,req,res,next)=>{//if error occur inside method then it runs
//     console.error(err.stack)
//    res.status(500).send("Something Broke!");

// })

//built in middleare
// express.json()
//express.static()
// express.urlencoded({extended:true})


//third party middleware-learn form website





app.listen(3000,()=>{
    console.log("")
})