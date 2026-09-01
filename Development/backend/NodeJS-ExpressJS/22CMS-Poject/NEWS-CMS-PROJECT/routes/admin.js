import express from 'express'

import articleController from '../controllers/articleController.js'
import categoryController from '../controllers/categoryController.js'
import userController from '../controllers/userController.js'
import commentController from '../controllers/commentController.js'
import isLoggedIn from '../middleware/isLoggedIn.js'
import isAdmin from '../middleware/isAdmin.js'
import upload from '../middleware/multer.js'
import isValid from '../middleware/validation.js'




const router=express.Router()


//login routes
router.get('/', userController.loginPage)
router.post('/index',isValid.loginValidation, userController.adminLogin)
router.get('/logout', isLoggedIn, userController.logout)
router.get('/dashboard', isLoggedIn, userController.dashboard)
router.get('/settings', isLoggedIn,isAdmin, userController.settings)
router.post('/save-settings', isLoggedIn,isAdmin,upload.single('website_logo'), userController.saveSettings)



//user CRUD Routes
router.get('/users', isLoggedIn, isAdmin, userController.allUsers)
router.get('/add-user', isLoggedIn, isAdmin, userController.addUserPage)
router.post('/add-user', isLoggedIn, isAdmin,isValid.UserValidation, userController.addUser)
router.get('/update-user/:id', isLoggedIn, isAdmin, userController.updateUserPage)
router.post('/update-user/:id', isLoggedIn, isAdmin,isValid.UserUpdateValidation, userController.updateUser)
router.delete('/delete-user/:id', isLoggedIn, isAdmin, userController.deleteUser)

//category CRUD Routes
router.get('/category', isLoggedIn, isAdmin, categoryController.allCategories)
router.get('/add-category', isLoggedIn, isAdmin, categoryController.addCategoryPage)
router.post('/add-category', isLoggedIn, isAdmin,isValid.categoryValidation, categoryController.addCategory)
router.get('/update-category/:id', isLoggedIn, isAdmin, categoryController.updateCategoryPage)
router.post('/update-category/:id', isLoggedIn, isAdmin,isValid.categoryValidation, categoryController.updateCategory)
router.delete('/delete-category/:id', isLoggedIn, isAdmin, categoryController.deleteCategory)

//Article CRUD Routes
router.get('/articles', isLoggedIn, articleController.allArticles)
router.get('/add-article', isLoggedIn, articleController.addArticlePage)
router.post('/add-article', isLoggedIn,upload.single('image'),isValid.articleValidation,articleController.addArticle)
router.get('/update-article/:id', isLoggedIn, articleController.updateArticlePage)
router.post('/update-article/:id', isLoggedIn,upload.single('image'),isValid.articleValidation, articleController.updateArticle)
router.delete('/delete-article/:id', isLoggedIn, articleController.deleteArticle)

//comment Routes
router.get('/comments', isLoggedIn, commentController.allComments)
router.put('/update-comment-status/:id', isLoggedIn, commentController.updateCommentStatus)
router.delete('/delete-comment/:id', isLoggedIn, commentController.deleteComment)





//404 middleware
router.use(isLoggedIn,(req, res,next) => {
    res.status(404).render('admin/404',{
        message:'Page not found',
        role:req.role


    });
});


//Error Handler
router.use(isLoggedIn,(err,req, res,next) => {
    console.log(err.stack)
    const status=err.stack || 500
    let view
    switch (status) {
        case 404:
            view = 'admin/404'
            break
        case 401:
            view='admin/401'
        case 500:
            view='admin/500'
        default:
            view = 'admin/500'
    }
    res.status(status).render(view,{
        message:err.message || 'Intenal Server Error',
        role:req.role

    });
});



export default router;


