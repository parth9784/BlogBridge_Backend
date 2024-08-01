const nodemailer = require('nodemailer');
require('dotenv').config();
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT == 465,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: process.env.SMTP_PASSWORD,
    },
  });
  function Mailer(email,subject,message){
      const mailOptions = {
          from: process.env.SMTP_MAIL,
          to: email,
          subject: subject,
          text: message, 
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            return res.status(500).json({ msg: "Failed to send email" });
          } else {
            console.log("Mail Sent Successfully..");
            return res.status(200).json({
              email: email,
              msg: message,
              sub: subject,
            });
          }
        });
  
  }
  module.exports={Mailer}