import express from 'express'
const app=express()

app.get('/',(req,res)=>{
    res.json([
        {
            id:1,
            EmpolyeeName:"imran",
            EmpolyeeSalary:3000
        },
        {
            id:2,
            EmpolyeeName:"shayan",
            EmpolyeeSalary:4000
        },
        {
            id:2,
            EmpolyeeName:"shayan",
            EmpolyeeSalary:4000
        }
    ])
})

app.listen(3000,()=>{
    console.log(`express app is running on port 3000`)
})