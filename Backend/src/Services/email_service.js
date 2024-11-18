const nodemailer = require("nodemailer");
require("dotenv").config();

class EmailService {
  constructor() {}

  sendEmail(email, subject, message) {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.APP_EMAIL,
        pass: process.env.APP_PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.APP_EMAIL,
      to: email,
      subject: subject,
      text: message,
    };
    try {
      transporter.sendMail(mailOptions);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = EmailService;
