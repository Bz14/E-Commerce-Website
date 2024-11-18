const VerificationEmail = (name, verificationLink) => {
  const body = `
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>Email Verification</title>
			<style>
				body {
					font-family: Arial, sans-serif;
					background-color: #f4f4f4;
					margin: 0;
					padding: 20px;
				}
				.container {
					background-color: #ffffff;
					border-radius: 5px;
					box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
					max-width: 600px;
					margin: auto;
					padding: 20px;
				}
				h1 {
					color: #333333;
				}
				p {
					line-height: 1.5;
					color: #555555;
				}
				.button {
					background-color: gray;
					color: black;
					padding: 10px 15px;
					text-decoration: none;
					border-radius: 5px;
					display: inline-block;
					margin-top: 15px;
				}
				.footer {
					margin-top: 20px;
					font-size: 12px;
					color: #999999;
				}
			</style>
		</head>
		<body>
			<div class="container">
				<h1>Email Verification</h1>
				<p>Hello ${name},</p>
				<p>Thank you for signing up! To complete your registration, please verify your email by clicking the button below:</p>
				<a href=${verificationLink} class="button">Verify Email</a>
				<p>If you did not sign up for this account, please ignore this email.</p>
				<div class="footer">
					<p>Thank you!</p>
				</div>
			</div>
		</body>
		</html>`;
  return body;
};

module.exports = VerificationEmail;
