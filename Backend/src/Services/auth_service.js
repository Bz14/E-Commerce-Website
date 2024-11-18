const User = require("../Domains/Entities/User");
class AuthService {
  constructor(authRepo) {
    this.authRepo = authRepo;
  }
  async Signup(name, email, password) {
    let user;
    try {
      user = new User({ name, email, password });
    } catch (error) {
      throw error;
    }

    const existingUser = await this.authRepo.FindUserByEmail(email);
    if (existingUser) {
      if (existingUser.isVerified) {
        throw new Error("User already exists.");
      }
      throw new Error("User already signed up. Please verify your email");
    }
    try {
      const hashedPassword = password.hashedPassword();
    } catch (error) {
      throw error;
    }
    // here we will send verification email
    // if email sent successfully then we will create user
    // else we will throw an error
    user.password = hashedPassword;
    try {
      await this.authRepo.CreateUser(user);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthService;
