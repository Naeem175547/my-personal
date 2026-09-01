const express=require("express")
const path=require("path")
const app=express()
app.listen(3000,()=>{
    console.log("succesfully conneted on port 3000.")

})
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'../views'));

app.get('/',(req,res)=>{
    // res.send({
    //     name:"yahubaba",
    //     age:20
    // })//js obj goes as josn

    // res.send([10,20,30])

    // res.json({name:"imran",age:25})
     res.jsonp({name:"imran",age:25})
    

})
app.get('/about',(req,res)=>{
    // res.send("about page")
    // res.redirect('https://www.google.com')
    // res.redirect(300,'https://www.google.com')
    // res.redirect('..')//back
})
// app.get('/about',(req,res)=>{
//     res.send("about333 page")
// })//if two route are same,first will run

app.get('/user',(req,res)=>{
    res.render('users')

})

app.get('/download',(req,res)=>{
//   res.download(path.join(__dirname,'dsa.xlsx'));//this is abosulte path
//   res.download('./dsa.xlsx')//for using this our file path should relative form tutorial
res.download(__dirname+'/dsa.xlsx')//__dirname is absolute path from root to current directry
console.log(__dirname);

// res.sendFile(__dirname+'/dsa.xlsx')

})

app.get('/end',(req,res)=>{
    res.write("this is testing")
    res.end()
})

app.get('/error',(req,res)=>{
    // res.sendStatus(404);
    res.status(200).send("Success")
})

app.get('/check',(req,res)=>{
    console.log(res.headersSent)
    res.send("hello")
    console.log(res.headersSent)
})

app.get('/header',(req,res)=>{
    res.set('custom-header','hello23')
    console.log(res.get('custom-header'))
    res.send("header set")
})