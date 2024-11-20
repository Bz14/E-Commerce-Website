const { ObjectId } = require("mongodb");
const Email = require("../Value-objects/email");
const Password = require("../Value-objects/password");
class User {
  constructor(
    name,
    email,
    password,
    isVerified = false,
    googleId = null,
    token = null,
    tokenExpires = null,
    createdAt = null,
    profile = null,
    phone = null,
    address = null
  ) {
    this.id = new ObjectId();
    this.name = name;
    this.email = new Email(email);
    this.password = new Password(password);
    this.isVerified = isVerified;
    this.googleId = googleId;
    this.token = token;
    this.tokenExpires = tokenExpires;
    this.createdAt = createdAt || new Date();
    this.profile = profile;
    this.phone = phone;
    this.address = address;
  }
}

module.exports = User;
