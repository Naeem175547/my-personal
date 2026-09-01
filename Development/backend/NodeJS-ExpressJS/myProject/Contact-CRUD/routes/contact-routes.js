import express from 'express'
import { getContacts,addContact,showContactPage,deleteContactpage,updateContactPage,updateContact} from '../controllers/contact.controller.js';

const Router=express.Router()

Router.get('/',getContacts)

Router.get('/add-contact',(req,res)=>{
    res.render("add-contact.ejs")

})
Router.post('/add-contact',addContact)
Router.get('/show-contact/:id',showContactPage)

Router.get('/delete-contact/:id',deleteContactpage)
Router.get('/update-contact/:id',updateContactPage)
Router.post('/update-contact/:id',updateContact)

export default Router;