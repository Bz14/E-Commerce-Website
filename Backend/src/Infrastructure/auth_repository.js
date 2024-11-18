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
      const user = new UserModel(user);
      await user.save();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AuthRepository;
