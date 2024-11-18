const AuthService = require("../Services/auth_service");
const AuthRepository = require("../Infrastructure/auth_repository");

const authRepo = new AuthRepository();
const authService = new AuthService(authRepo);

const Signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    await authService.Signup(name, email, password);
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
};

module.exports = { Signup };
