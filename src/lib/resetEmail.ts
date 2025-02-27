const resetEmail  = (link,name)=>{
      return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Reset</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f4;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 0 auto;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }

    h1 {
      color: #333;
      font-size: 24px;
      margin-bottom: 20px;
    }

    p {
      color: #555;
      line-height: 1.6;
      margin-bottom: 15px;
    }

    .button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      text-decoration: none;
      border-radius: 5px;
      font-weight: bold;
    }

    .button:hover {
      background-color: #0069d9;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Password Reset Request</h1>

    <p>Hi ${name},</p>

    <p>We received a request to reset your password for orasc. To reset your password, please click the following link:</p>

    <a href="${link}" class="button">Reset Password</a>

    <p>This link will expire in **24 hours**. If you did not request a password reset, please ignore this email.</p>

    <p>Thanks,<br>
    The ORASC Team</p>
  </div>
</body>
</html>
      
      `
  }
  
  
  export default resetEmail