const AuthService = require("../Services/auth_service");
const AuthRepository = require("../Infrastructure/auth_repository");
const EmailService = require("../Services/email_service");
const VerificationService = require("../Services/verification_service");

const authRepo = new AuthRepository();
const emailService = new EmailService();
const verificationService = new VerificationService();

require("dotenv").config();

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
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const VerifyController = async (req, res) => {
  const { token } = req.query;
  console.log(token);
  try {
    await authService.Verify(token);
    res.status(200).redirect(process.env.LOGIN_REDIRECT);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

const LoginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { accessToken, refreshToken } = await authService.Login(
      email,
      password
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.status(200).json({ accessToken });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

module.exports = { SignupController, VerifyController, LoginController };
