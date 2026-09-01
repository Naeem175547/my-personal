import express from 'express'
import cookieParser from 'cookie-parser'
import csrf from 'csurf'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')
app.use(cookieParser())   // FIXED
const csrfProtection = csrf({ cookie: true })
app.get('/', (req, res) => {
    res.send("<h1>Homepage</h1>")
})
app.get('/form', csrfProtection, (req, res) => {
    res.render('form', {
        csrfToken: req.csrfToken()   // FIXED
    })
})

app.post('/submit', csrfProtection, (req, res) => {
    res.send(req.body)
})

app.listen(3000, () => {
    console.log("server started..")
})