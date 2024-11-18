const bcrypt = require("bcrypt");

class Password {
  constructor(password) {
    if (!password) {
      throw new Error("Password is required");
    }
    if (typeof password !== "string") {
      throw new Error("Password must be a string");
    }
    if (!this.ValidatePassword(password)) {
      throw new Error("Invalid password");
    }
    this.password = password;
  }

  ValidatePassword(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  }
  async HashPassword() {
    const hashedPassword = await bcrypt.hash(this.password, 10);
    return hashedPassword;
  }
  async ComparePassword(hash) {
    const isMatch = await bcrypt.compare(this.password, hash);
    return isMatch;
  }
  toString() {
    return this.password;
  }
}

module.exports = Password;
