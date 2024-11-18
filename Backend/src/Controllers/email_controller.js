const EmailService = require("../Services/email_service");

const emailService = new EmailService();

const EmailController = async (req, res) => {
  const { to, subject, body } = req.body;
  try {
    await emailService.sendEmail(to, subject, body);
    res.status(200).json({ message: "Email sent successfully" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

module.exports = { EmailController };
