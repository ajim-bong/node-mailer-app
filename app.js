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
console.log(transporter.auth.user)
console.log(transporter.auth.pass)

// step 2 configuring the mail options
let mailOptions = {
    from: process.env.EMAIL,
    to: 'paulnganfack@gmail.com',
    subject: 'Programming Stuff',
    text: 'Hey there Pablo this is Ajim trying to send u email using a NodeJS program. if I run this script too many times, it will spam you wih a lot of shit.'
}

// step 3 This one is almost like pressing the "Send Email Button"
/*
transporter.sendMail(mailOptions, (err, data)=>{
    if(err){
        console.error('An Error occured' +err)
    } else {
        console.log('The email was sent successfully')
    }
})
*/

app.listen(3000, ()=> console.log('Runing on port 3000...'))