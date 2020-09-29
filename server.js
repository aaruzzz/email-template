require('dotenv').config();

const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');
const log = console.log;
name = "Buddha Gautam";
email = "buddhagautam231@gmail.com";
job = "Prostitution";

// Step 1
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});
// Step 2
transporter.use("compile",hbs({
    viewEngine:{
       partialsDir:"./mail_template/",
       defaultLayout:""
   },
  viewPath:"./mail_template/",
 extName:".hbs"
}));

let mailOptions = {
from: process.env.EMAIL,
to: `${email}`,
subject: 'JUST AN EMAIL',
text: ' ',
template: 'index',
context: {
    name,
    email,
    job
} // send extra values to template
};

// Step 4
transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        return log('Error occurs');
    }
    return log('Email sent!!!');
});