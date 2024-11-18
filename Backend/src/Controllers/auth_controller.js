const AuthService = require("../Services/auth_service");
const AuthRepository = require("../Infrastructure/auth_repository");
const EmailService = require("../Services/email_service");
const VerificationService = require("../Services/verification_service");

const authRepo = new AuthRepository();
const emailService = new EmailService();
const verificationService = new VerificationService();

const authService = new AuthService(
  authRepo,
  emailService,
  verificationService
);

const SignupController = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await authService.Signup(name, email, password);
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

module.exports = { SignupController };
