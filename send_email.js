const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "ratheeshkarnan007@gmail.com",
    pass: process.env.APP_PASSWORD,
  },
});

const mailOptions = {
  from: "ratheeshkarnan1999@gmail.com",
  to: "gbhaskar286@gmail.com",
  subject: "Sending Email Using Nodemailer",
  html: "<h1> Welcome by Ratheesh </h1>",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error(error);
  } else {
    console.log("Email sent:" + info.response);
  }
});
