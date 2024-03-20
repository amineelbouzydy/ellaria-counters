const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON and URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Use the cors middleware to allow requests from all origins
app.use(cors());

// Route to handle form submission and send email
app.post('/send-email', (req, res) => {
  const { name, email, message,phone } = req.body;

  // Create a nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'amineelbouzidi36@gmail.com',
      pass: 'wzmh rwpa codi ypyb'
    }
  });

  const emailHtml = `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About People counters</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      background-color: #f4f4f4;
      padding: 20px;
    }
    
    .container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #fff;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      padding: 20px;
    }
    
    h2 {
      font-size: 24px;
      margin-bottom: 20px;
      color: #0498CF;
    }
    
    p {
      margin-bottom: 10px;
    }
  </style>
  </head>
  <body>
  <div class="container">
    <h2>About People counters</h2>
    <p><strong>Nom complet:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>numéro de téléphone :</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  </div>
  </body>
  </html>
  
  `
  // Define email options
  let mailOptions = {
    from: 'Ellaria Counters <amineelbouzidi36@gmail.com>',
    to: 'amine.elbouzidi@arkx.academy',
    subject: 'About people counters ',
    html: emailHtml,
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});