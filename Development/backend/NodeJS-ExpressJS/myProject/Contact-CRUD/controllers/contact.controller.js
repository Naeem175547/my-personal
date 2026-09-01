import mongoose from 'mongoose';
import Contact from '../models/contact.model.js';
import { error } from 'node:console';
import { paginate } from 'mongoose-paginate-v2';
export const getContacts=async (req,res)=>{
    const {page=1,limit=3}=req.query;
   try{
    //  const contacts=await Contact.find()
    const contacts=await Contact.paginate({},{
        page:page,
        limit:limit
    })
    console.log(contacts)
  
     if(!contacts){
        res.render('400',{message:"contacts not found"});
     }
    // console.log(contacts)
    res.render('home',{        

    contacts:contacts.docs,
    totalDocs:contacts.totalDocs,
    limit:contacts.limit,
    totalPages:contacts.totalPages,
    currentPage:contacts.page,
    pagingCounter:contacts.pagingCounter,
    hasPrevPage:contacts.hasPrevPage,
    hasNextPage:contacts.hasNextPage,
    prevPage:contacts.prevPage,
    nextPage:contacts.nextPage        
    })

   }catch(error){
    res.render('500',{message:error.message})


   }
    

}
export const addContact=async (req,res)=>{
    console.log(req.body)
    await Contact.create(req.body)
    // res.send(req.body)
    res.redirect('/')

}
export const showContactPage = async (req,res)=>{
    let paramId=mongoose.Types.ObjectId.isValid(req.params.id)
    if(!paramId){
        res.render('400',{message:"file not found"})
        return;
    }
    try{
        const contact=await Contact.findOne({_id:req.params.id})
        if(!contact) return res.render('400')
        console.log(contact)
        res.render('show-contact',{contact})
    }
    catch(error){
        res.render('500',{message:error})
    }

}
export const deleteContactpage=async (req,res)=>{
    await Contact.findByIdAndDelete(req.params.id)
    res.redirect('/');

}
export const updateContactPage=async (req,res)=>{
    const contact=await Contact.findOne({_id:req.params.id})
    res.render('update-page',{contact})
    
}
export const updateContact=async (req,res)=>{
    const contact=req.body;
    console.log(contact)
    // await Contact.findByIdAndUpdate(req.params.id,contact)
    await Contact.updateOne({_id:req.params.id},contact)
    res.redirect('/')


}