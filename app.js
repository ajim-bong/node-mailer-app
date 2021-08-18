
require('dotenv').config();
const express = require('express')
const app = express()

const nodemailer = require('nodemailer')
// step 1 is to create a transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

// step 2 configuring the mail options
let mailOptions = {
    from: 'a user',
    to:  process.env.EMAIL,
    subject: 'Programming Stuff',
    text: 'this has surely workd now'
}

 //step 3 This one is almost like pressing the "Send Email Button"

transporter.sendMail(mailOptions, (err, data)=>{
    if(err){
        console.error('An Error occured' +err)
    } else {
        console.log('The email was sent successfully')
    }
})


app.listen(3000, ()=> console.log('Runing on port 3000...'))