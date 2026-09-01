const express=require('express')
const app=express()
app.listen(3000,()=>{
    console.log("Successfully connected on port 3000")
})
app.use(express.json())//middleware
app.use(express.urlencoded({extended:false}))
app.get('/',(req,res)=>{
    res.jsonp({name:'yahoobana',age:35})
})

app.get('/request',(req,res)=>{
    // res.send(req.hostname)
    // res.send(req.ip)//proper ip is shown in server
    // res.send(res.ips)
    // res.send(req.method)
    // res.send(req.originalUrl)
    //res.send(req.path)
    // res.send(req.protocol)
    // res.send(req.secure)
    // res.send(req.route)

    // if(req.accepts('html')){
    //     res.send("<h1>Hello HTMl</h1>")
    // }
    // else if(req.accepts('json')){
    //     res.send({message:'Hello jSON'})
    // }
    // else if(req.accepts('xml')){
    //     res.send("<message>XML message</message>")
    // }
    // else{
    //     res.send("formal not supported")
    // }


    // res.send(req.headers)
    // res.send(req.get('Accept'))

    

    


    


})
app.post('/about',(req,res)=>{
    // res.send(req.body)
    // res.send("imran")

    if(req.is('application/json')){
        res.end("valid JSON Data")
    }
    else if(req.is('text/html')){
        res.send("html data")
    }
    else{
        res.status(400).send("Unsupported content-type")
    }

})