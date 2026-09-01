import express from 'express'
import path from 'path'
import nodemailer from 'nodemailer'

const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs')

// Correct transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for 587
    auth: {
        user: 'naeemkhan7500.nk@gmail.com',
        pass: 'wdktwvuhcjtloamh'
    }
})

app.post('/send-email', async (req, res) => {
    const { to, subject, text } = req.body
      // const template = fs.readFile('./views/email-template.ejs')
  // const html = ejs.render(template, {name: 'John'})

    try {
        const info = await transporter.sendMail({
            from: '"Imran" <naeemkhan7500.nk@gmail.com>',
            to,
            subject,
            text,
            html: "<b>Hello</b>",//it will send Hello 
            attachments:[
                {
                    filename:'data.pdf',
                    path:path.resolve('files','data.pdf')
                }
                
            ]
        })

        res.json({ message: 'Email sent successfully', info })
    } catch (error) {
        res.status(500).json({
            message: 'Failed to send email',
            error: error.message
        })
    }
})

app.get("/", (req, res) => {
    res.render('mailpage')
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})