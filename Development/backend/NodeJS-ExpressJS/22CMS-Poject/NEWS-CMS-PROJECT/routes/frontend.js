import express from 'express'
import siteController from '../controllers/siteController.js'
import loadCommonData from '../middleware/loadCommonData.js'
const router=express.Router()
router.use(loadCommonData)
router.get('/',siteController.index)
router.get('/category/:slug',siteController.articleByCategories);
router.get('/single/:id',siteController.singleArticle)
router.get('/search',siteController.search)
router.get('/author/:id',siteController.author)
router.post('/single/:id/comment',siteController.addComment)
router.get('/testing',siteController.testing)
router.use((req,res,next)=>{
    res.status(404).render('frontend/404',{message:'Page Not Found'})
})

//Error Handler
router.use((err, req, res, next) => {
    console.log(err.stack);

    const status = err.status || 500;

    res.status(status).render('frontend/partials/errors', {
        message: err.message || 'Something went wrong',
        status: status
    });
});


export default router;