const { ValidateEmail, ValidatePassword } = require("../Utils/validator");
const { FindUserByEmail } = require("../Services/auth_service");
const {hashPassword} = require("../Utils/password_util");,

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
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, password });
  res.status(200).send("Signup route");
};

module.exports = { Signup };
