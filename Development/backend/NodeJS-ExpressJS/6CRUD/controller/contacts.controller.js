import contact from '../models/contact.models.js'
import Contact from '../models/contact.models.js'
import mongoose from 'mongoose'
export const getContacts=async (req,res)=>{
  
   try{  
    // const contacts= await Contact.find()
    // res.render('home',{contacts})
    // res.send(contacts)

    //using pagination

    const {page=1,limit=5}=req.query;
    const options={
      page:parseInt(page),
      limit:parseInt(limit)
    }
    const result=await Contact.paginate({},options)
    // res.send(result)
    res.render('home',{
      "totalDocs": result.totalDocs,
  "limit": result.limit,
  "totalPages": result.totalPages,
  "page": result.page,
  "counter": result.pagingCounter,
  "hasPrevPage": result.hasPrevPage,
  "hasNextPage": result.hasNextPage,
  "prevPage": result.prevPage,
  "nextPage": result.nextPage,
  contacts:result.docs
      
    })
   
  
  }
  catch(error){
    res.render('500',{message:error})

  } 

 }


 export const getContact=async (req,res)=>{
  var paramId=mongoose.Types.ObjectId.isValid(req.params.id)
  if(!paramId){
    res.render('404',{message:"invalid id"})
    return;
  }
  try{
    // const content=await Contact.findOne({_id:req.params.id})
  const content=await Contact.findById(req.params.id)
  if(!content) return res.render('404',{message:"contact not found"})
   res.render('show-contact',{content})
  // res.send(contend)
  }
  catch(error){
    res.render('500',{message:error})

  }  

 }


 export const addContactPage=async (req,res)=>{
   res.render('add-contact')
   
 }


 export const addContact= async(req,res)=>{
  //await Contact.insertOne({
     //   first_name:req.body.first_name,
     //   last_name:req.body.last_name,
     //   email:req.body.email,
     //   phone:req.body.phone,
     //   address:req.body.address
 
     // })
     try{
     await Contact.create(req.body)//if we want to keep structre same as req.body
     res.redirect("/")
  }
  catch(error){
    res.render('500',{message:error})

  }
     
    
    
  }

 export const updateContactPage=async (req,res)=>{
  var paramId=mongoose.Types.ObjectId.isValid(req.params.id)
  if(!paramId){
    res.render('404',{message:"invalid id"})
    return;
  }
  try{
    const content=await Contact.findOne({_id:req.params.id})
     if(!content) return res.render('404',{message:"contact not found"})
   res.render('update-contact',{content})

  }
  catch(error){
    res.render('500',{message:error})

  }
   
 }


  export const updateContact=async (req,res)=>{
    var paramId=mongoose.Types.ObjectId.isValid(req.params.id)
  if(!paramId){
    res.render('404',{message:"invalid id"})
    return;
  }
   try{
    const {first_name,last_name,email,phone,address}=req.body;
       
     const content=await Contact.findByIdAndUpdate(req.params.id,{first_name,last_name,email,phone,address})
      if(!content) return res.render('404',{message:"contact not found"})
     // await Contact.findByIdAndUpdate(req.params.id,req.body)//this and above is same we can use it if name are same
     res.redirect("/")    

  }
  catch(error){
    res.render('500',{message:error})

  }
     
  }


   export const deleteContact=async (req,res)=>{
    var paramId=mongoose.Types.ObjectId.isValid(req.params.id)
    if(!paramId){
    res.render('404',{message:"invalid id"})
    return;
  }
  try{    
        
     const content=await Contact.findByIdAndDelete(req.params.id)
     if(!content) return res.render('404',{message:"contact not found"})
    res.redirect("/")     

  }
  catch(error){
    res.render('500',{message:error})

  }  
    
 }