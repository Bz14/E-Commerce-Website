const User = require("../Domains/Entities/User");

class AuthService {
  constructor(authRepo, emailService, verificationService) {
    this.authRepo = authRepo;
    this.emailService = emailService;
    this.verificationService = verificationService;
  }

  async Signup(name, email, password) {
    let user;
    try {
      user = new User({ name, email, password });
      const hashedPassword = await password.HashPassword();
      user.password = hashedPassword;
    } catch (error) {
      throw error;
    }

    const existingUser = await this.authRepo.FindUserByEmail(email);
    if (existingUser) {
      if (existingUser.isVerified) {
        throw new Error("User already exists.");
      }
      throw new Error("User already signed up. Please verify your email.");
    }
    const session = await this.authRepo.startSession();
    try {
      session.startTransaction();
      await this.authRepo.CreateUser(user, { session });
      const verificationToken =
        await this.verificationService.GenerateVerificationToken();
      user.token = verificationToken;
      user.tokenExpires = new Date(Date.now() + 3600000);
      const verificationLink =
        this.verificationService.GenerateVerificationLink(verificationToken);
      const verificationEmail = this.verificationService.VerificationEmail(
        name,
        verificationLink
      );
      await this.emailService.sendEmail(
        email,
        "Email Verification",
        verificationEmail
      );
      await session.commitTransaction();
    } catch (error) {
      console.log("Error", error);
      await session.abortTransaction();
      throw error;
    }
  }
}

module.exports = AuthService;
