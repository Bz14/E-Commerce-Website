class Email {
  constructor(email) {
    if (!email) {
      throw new Error("Email is required");
    }
    if (typeof email !== "string") {
      throw new Error("Email must be a string");
    }
    if (!this.ValidateEmail(email)) {
      throw new Error("Invalid email");
    }
    this.email = email.trim();
  }
  ValidateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    console.log(re.test(email), email);
    return re.test(email);
  }
  toString() {
    return this.email;
  }
}

module.exports = Email;
