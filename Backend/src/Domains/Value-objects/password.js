const bcrypt = require("bcrypt");

class Password {
  constructor(password) {
    if (!password) {
      throw new Error("Password is required");
    }
    if (typeof password !== "string") {
      throw new Error("Password must be a string");
    }
    // if (!this.ValidatePassword(password.trim())) {
    //   throw new Error("Invalid password");
    // }
    this.password = password;
  }

  ValidatePassword(password) {
    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return re.test(password);
  }
  async HashPassword() {
    try {
      const hashedPassword = await bcrypt.hash(this.password, 10);
      return hashedPassword;
    } catch (error) {
      throw error;
    }
  }
  async ComparePassword(hash) {
    try {
      const isMatch = await bcrypt.compare(hash, this.password);
      return isMatch;
    } catch (error) {
      throw error;
    }
  }
  toString() {
    return this.password;
  }
}

module.exports = Password;
