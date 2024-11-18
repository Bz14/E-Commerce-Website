const { ObjectId } = require("mongodb");
class User {
  constructor(
    email,
    password,
    isVerified = false,
    googleId = null,
    token = null,
    tokenExpires = null,
    createdAt = null
  ) {
    this.id = new ObjectId();
    this.email = new Email(email);
    this.password = new Password(password);
    this.isVerified = isVerified;
    this.googleId = googleId;
    this.token = token;
    this.tokenExpires = tokenExpires;
    this.createdAt = createdAt || new Date();
  }
}

module.exports = User;
