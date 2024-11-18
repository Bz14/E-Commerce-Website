const { ValidateEmail, ValidatePassword } = require("../Utils/validator");
const { FindUserByEmail } = require("../Services/auth_service");
const { HashPassword, ComparePassword } = require("../Utils/password_util");

const Signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).send("All fields are required");
  }
  if (!ValidateEmail(email)) {
    return res.status(400).send("Invalid email format.");
  }
  if (!ValidatePassword(password)) {
    return res.status(400).send("Invalid password format");
  }
  const user = await FindUserByEmail(email);
  if (user) {
    if (user.isVerified) {
      return res.status(400).send("User already exists");
    }
    return res.status(400).send("User already. Please verify your email");
  }
  const hashedPassword = await HashPassword(password);
  const newUser = new User({ name, email, hashedPassword });

  // lets first send verification email

  res.status(200).send("Signup route");
};

module.exports = { Signup };
