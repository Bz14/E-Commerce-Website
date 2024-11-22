const verificationService = require("../Services/verification_service");

const RefreshController = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const decoded = verificationService.VerifyRefreshToken(refreshToken);
    const accessToken = verificationService.GenerateAccessToken(decoded);
    res.status(200).json({ accessToken });
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      return res.status(403).json({ message: "Refresh token expired" });
    }
    if (err.name === "JsonWebTokenError") {
      return res.status(403).json({ message: "Invalid refresh token" });
    }
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = RefreshController;
