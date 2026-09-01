import express from 'express'
import multer from 'multer'
import path from 'path'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.set('view engine', 'ejs')


// ------------------------
// MULTER STORAGE CONFIG
// ------------------------
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads')
    },
    filename: (req, file, cb) => {
        const newFileName = Date.now() + path.extname(file.originalname)
        cb(null, newFileName)
        }
})
//for single and array
// const fileFilter = (req, file, cb) => {

//     if (file.mimetype.startsWith('image/')) {
//         cb(null, true)
//     } else {
//         cb(new Error('Only images are allowed!'), false)
//     }

// }
//for fields
const fileFilter = (req, file, cb) => {
    console.log(file)

    if(file.fieldname=='userfile'){
         if (file.mimetype.startsWith('image/')) {
        cb(null, true)
    } else {
        cb(new Error('Only images are allowed!'), false)
    }

    }
    else if(file.fieldname=='userdocuments'){
        if(file.mimetype=='application/pdf'){
            cb(null,true)
        }
        else{
            cb(new Error('only images are allowed!'),false)
        }
    }
    else{
         cb(new Error('only images are allowed!'),false)

    }
    
   

}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 3 // 3MB
    },
    fileFilter:fileFilter
})
const errorMiddleware=(error,req,res,next)=>{
    if(error instanceof multer.MulterError){
        if(error.code==='LIMIT_UNEXPECTED_FILE'){
            return res.status(400).send(`Error: Too many files uploaded`)
        }
        return res.status(400).send(`error:${error.message}`)
    }
    else if(error){
        return res.status(500).send(`Something went wrong:${error.message}`)
        

    }
    next()
}


app.get('/', (req, res) => {
    res.render('myform')
})

// for single file
// app.post('/submitform', upload.single('userfile'), (req, res) => {
//     console.log(req.file)//file not uploaded then req.file(file object) will be undefined means not created
//     if(!req.file){
//         return res.status(400).send(`message:error`)
//     }
//     res.send(req.file)
//     // res.send(req.body)
// },errorMiddleware)

// for multi file
// app.post(
//   '/submitform',
//   upload.array('userdocuments', 5),
//   (req, res) => {
//     console.log(req.files);
//     if (!req.files) {
//       return res.status(400).send("message: file not uploaded");
//     }
//     res.send(req.files);
//   },
//   errorMiddleware
// );


app.post(
  '/submitform',
  upload.fields([
    {name:'userfile',maxCount:1},
    {name:'userdocuments',maxCount:3}
  ]),
  (req, res) => {
    // console.log(req.files);
    if (!req.files || req.files.length === 0) {
      return res.status(400).send("message: file not uploaded");
    }
    res.send(req.files);
  },
  errorMiddleware
);


// ------------------------
app.listen(3000, () => {
    console.log("server started at port 3000.")
})