const UserModel = require("../Models/user_models");

class AuthRepository {
  constructor() {}
  async FindUserByEmail(email) {
    try {
      const user = await UserModel.findOne({ email });
      return user;
    } catch (error) {
      return null;
    }
  }

  async CreateUser(user) {
    try {
      const newUser = new UserModel(user);
      await newUser.save();
    } catch (error) {
      throw error;
    }
  }

  async DeleteUser(email) {
    try {
      await UserModel.deleteOne({ email });
    } catch (error) {
      throw error;
    }
  }

  async FindUserByToken(token) {
    try {
      const user = await UserModel.findOne({ token });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async VerifyUser(email) {
    try {
      await UserModel.updateOne({ email }, { isVerified: true });
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthRepository;
