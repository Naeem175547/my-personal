const express=require("express")
const app=express()
app.listen(3000,()=>{
    console.log("succesfully conneted on port 3000.")

})

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to home page</h1>")
})
app.get('/about',(req,res)=>{
    res.send("about page")
})
app.get('/about/username',(req,res)=>{
    res.send("user page")
})
app.get('/random.text',(req,res)=>{
    res.send("random page")

})
app.get('/user/:id',(req,res)=>{
    res.send(req.params)

})


app.get('/user/:userId/book/:bookid',(req,res)=>{
    res.send(req.params)
})
// app.get('/user/:userId/book/:bookid',(req,res)=>{
//     res.send(req.params.userId)//beacuse req.params is a obj
// })

// app.get('/search',(req,res)=>{
//     res.send(req.query)
// })
app.get('/search',(req,res)=>{
    const name=req.query.name;
    const age=req.query.age
    res.send(`seach results for name:${name},age:${age}`)
})