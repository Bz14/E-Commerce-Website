const crypto = require("crypto");
const VerificationEmail = require("../Utils/verification_email");
require("dotenv").config();
class Verification {
  constructor() {}

  async GenerateVerificationToken() {
    try {
      const buffer = await new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buffer) => {
          if (err) {
            reject(err);
          } else {
            resolve(buffer);
          }
        });
      });
      return buffer.toString("hex");
    } catch (error) {
      throw new Error("Error generating verification token: " + error.message);
    }
  }
  GenerateVerificationLink = (token) => {
    const verificationLink = `${process.env.ServerHost}/api/auth/verify?token=${token}`;
    return verificationLink;
  };

  VerificationEmail = (name, verificationLink) => {
    return VerificationEmail(name, verificationLink);
  };
}

module.exports = Verification;
