const crypto = require("crypto");
const VerificationEmail = require("../Utils/verification_email");
const json = require("jsonwebtoken");
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
    const verificationLink = `${process.env.ServerHost}/api/v1/auth/verify?token=${token}`;
    return verificationLink;
  };

  VerificationEmail = (name, verificationLink) => {
    return VerificationEmail(name, verificationLink);
  };

  GenerateAccessToken = (user) => {
    return json.sign(
      {
        email: user.email,
        id: user._id,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "15m",
      }
    );
  };

  GenerateRefreshToken = (user) => {
    return json.sign(
      {
        email: user.email,
        id: user._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "7d",
      }
    );
  };

  VerifyRefreshToken = (token) => {
    try {
      return json.verify(token, process.env.REFRESH_TOKEN_SECRET);
    } catch (error) {
      throw error;
    }
  };
}
module.exports = Verification;
