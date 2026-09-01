import express from 'express'
import cookieParser from 'cookie-parser'

const app = express()


// IMPORTANT
// app.use(cookieParser())   
app.use(cookieParser("mySecretKey123"))   // signed cookie

app.get('/', (req, res) => {
    const username = req.cookies.username
    if (!username) {
        return res.send('no cookie found')
    }
    res.send(`Hompage :cookie found ${username}`)
})

app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'Yahu Bana', {
        maxAge: 90000,
        httpOnly: true,
    })
    res.send("cookie has been set")
})

app.get('/get-cookie', (req, res) => {
    console.log(req.cookies)
    const username = req.cookies.username
    if (!username) {
        return res.send('no cookie found')
    }
    res.send(`cookie found ${username}`)
})

app.get('/remove-cookie', (req, res) => {
    res.clearCookie('username')
    res.send("cookie deleted")
})

app.listen(3000, () => {
    console.log('App listening on port 3000!')
})