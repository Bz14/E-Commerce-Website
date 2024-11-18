const User = require("../Models/user");

const FindUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch (err) {
    return null;
  }
};

module.exports = { FindUserByEmail };
