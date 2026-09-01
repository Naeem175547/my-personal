import express from 'express'
import mongoose from 'mongoose'
import Listing from './models/listing.js'
import methodOverride from 'method-override'
import ejsMate from 'ejs-mate'
import wrapAsync from './utils/wrapAsync.js'
import ExpressError from './utils/ExpressError.js'
import listingSchema from './schema.js'

const MONGODB_URI = 'mongodb://127.0.0.1:27017/wandelust'

async function connectDB(){
    await mongoose.connect(MONGODB_URI);
}



connectDB().then(()=>{
    console.log("Database connected");
}).catch((err)=>{
    console.log("Database connection failed",err);
})

const app = express()


app.engine('ejs',ejsMate)
app.set('view engine','ejs')
app.set('views','./views')
app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))
app.use(methodOverride('_method'))

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.get('/listings',async(req,res)=>{
    const data =await Listing.find({});;
   res.render('listings/index',{data:data})
})


//new route 
app.get("/listings/new",(req,res)=>{
    res.render('listings/new')
})

//create route
// app.post("/listings",async(req,res)=>{
//     try{
//         console.log(req.body);
//     let listing=req.body.listing;
//     const newListing = new Listing(listing);
//     await newListing.save();
//     res.redirect("/listings");
//     }
//     catch(err){
//         res.status(400).send(err.message)
//     }
// }); 

app.post("/listings",wrapAsync(async(req,res)=>{
     const result=listingSchema.validate(req.body)
     console.log(result)

     if(result.error){
        new ExpressError(401,"validation err")
     }

    let listing=req.body.listing;
    const newListing = new Listing(listing);
    await newListing.save();
    res.redirect("/listings");
    
    
})); 



//show route
app.get("/listings/:id",async function (req,res) {
    let {id}=req.params;
    const data=await Listing.findById(id)
    res.render('listings/show',{listing:data})
    
})


//edit route
app.get('/listings/:id/edit',async(req,res)=>{
    const {id}=req.params;
    const listing=await Listing.findById(id);
    res.render('listings/edit',{listing:listing})


})
//update route



app.put('/listings/:id', async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id)
    res.redirect('/listings')
})


//delete route
app.delete('/listings/:id',async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect('/listings');
})


// app.get('/textListing',async(req,res)=>{
//     let sampleListing =new Listing({
//         title:"Sample Listing",
//         description:"This is a sample listing",
//         image:"",
//         price:100,
//         location:"New York",
//         country:"USA"
//     })
//     await sampleListing.save();
//     res.send("Sample listing saved to database");

// })

app.all(/.*/, (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

app.use((err, req, res, next) => {
    let { statusCode = 500, message = "Something went wrong" } = err;

    // res.status(statusCode).send(message);
    res.render('error',{message})
});



app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})


