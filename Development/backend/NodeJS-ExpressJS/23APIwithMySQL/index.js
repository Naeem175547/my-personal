import express from 'express'
import mysql from 'mysql2'
const app=express()




app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//MySql connection
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:"",
    database:'contectdb'
})


//this method will check whether connected or not
db.connect((err)=>{
    if(err){
        console.log('Error connection: '+err.stack)
        return;
    }
    console.log("MySQL Connected.")
})

//read All Contacts

app.get('/',(req,res)=>{
    res.send("homepage")
})

app.get('/contacts',(req,res)=>{
    db.query("SELECT * FROM CONTACTS",(err,result)=>{
        if(err) return res.status(404).send(err)
            res.send(result)

    })
})


app.get('/contact/:id',(req,res)=>{
    db.query("SELECT * FROM CONTACTS where id=?",[req.params.id],(err,result)=>{
        if(err) return res.status(404).send(err)
        if(result.length===0) return res.status(404).send({message:'Conteact not found'})
        res.send(result[0])

    })
})

//create contact

app.post('/contact',(req,res)=>{
    const {first_name,last_name,email,phone,address}=req.body;
    const sql='insert into contacts(first_name,last_name,email,phone,address) values(?,?,?,?,?)'
    db.query(sql,[first_name,last_name,email,phone,address],(err,result)=>{
        if(err) return res.status(500).send(err)        
        res.send({
            message:"Contacts Created",
            id:result.insertId
        })
    })




})

//update data

app.put('/contact/:id',(req,res)=>{
    const {first_name,last_name,email,phone,address}=req.body;
    const sql='update  contacts set first_name=?, last_name=?,email=?, phone=?,address=? where id=?'
    db.query(sql,[first_name,last_name,email,phone,address,req.params.id],(err,result)=>{
        if(err) return res.status(500).send(err)     
            
            if(result.affectedRows===0) return res.status(404).send({message:"Contact not found."})            
        res.send({
            message:"Contact updated",
        })
    })
})


// Delete contact
app.delete('/contact/:id', (req, res) => {
    db.query(
        "DELETE FROM contacts WHERE id = ?",
        [req.params.id],
        (err, result) => {

            if (err)
                return res.status(500).send(err);

            if (result.affectedRows === 0)
                return res.status(404).send({
                    message: 'Contact not found'
                });

            res.send({
                message: 'Contact deleted successfully'
            });
        }
    );
});


app.listen(3000,()=>{
    console.log("server is running on  port 3000")
})