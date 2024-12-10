const User = require("../Domains/Entities/User");
const UserProfile = require("../Domains/Entities/UserProfile");

class AuthService {
  constructor(authRepo, emailService, verificationService) {
    this.authRepo = authRepo;
    this.emailService = emailService;
    this.verificationService = verificationService;
  }

  async Signup(name, email, password) {
    let user;
    try {
      user = new User(name, email, password);
      const hashedPassword = await user.password.HashPassword();
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
    try {
      const verificationToken =
        await this.verificationService.GenerateVerificationToken();
      user.token = verificationToken;
      user.tokenExpires = new Date(Date.now() + 3600000);
      await this.authRepo.CreateUser(user);
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
    } catch (error) {
      this.authRepo.DeleteUser(email);
      throw error;
    }
  }

  async Verify(token) {
    const user = await this.authRepo.FindUserByToken(token);
    console.log(user);
    if (!user) {
      throw new Error("Invalid or expired token.");
    }
    if (user.isVerified) {
      throw new Error("Email already verified.");
    }
    if (user.tokenExpires < new Date()) {
      throw new Error("Token expired. Please request a resend.");
    }
    try {
      await this.authRepo.VerifyUser(user.email);
    } catch (error) {
      throw error;
    }
  }

  async Login(email, password) {
    const user = await this.authRepo.FindUserByEmail(email);
    if (!user) {
      throw new Error("User not found.");
    }
    if (!user.isVerified) {
      throw new Error("Email not verified.");
    }
    // if (user.googleId && password != user.googleId) {
    //   throw new Error("Please login with Google.");
    // }
    if (!user.googleId) {
      try {
        const newUser = new User(user.name, user.email, user.password);
        const passwordMatch = await newUser.password.ComparePassword(password);
        if (!passwordMatch) {
          throw new Error("Password does not match.");
        }
      } catch (error) {
        throw error;
      }
    }
    const accessToken = await this.verificationService.GenerateAccessToken(
      user
    );
    const refreshToken = await this.verificationService.GenerateRefreshToken(
      user
    );
    let profile = user.profile;
    return { accessToken, refreshToken, profile };
  }

  async LoginWithGoogle(user) {
    const existingUser = await this.authRepo.FindUserByEmail(user.email);
    if (!existingUser) {
      const newUser = new User(user.displayName, user.email, "", true, user.id);
      await this.authRepo.CreateUser(newUser);
      return this.Login(user.email, null);
    }
    return this.Login(user.email, null);
  }
}

module.exports = AuthService;
