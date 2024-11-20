const Name = require("../Value-objects/name");
const Email = require("../Value-objects/email");

class UserProfile {
  constructor(name, email, profile, phone, address) {
    this.name = new Name(name);
    this.email = new Email(email);
    this.profile = profile;
    this.phone = phone;
    this.address = address;
  }
}
