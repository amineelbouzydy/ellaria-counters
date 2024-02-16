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
  const { name, email, message } = req.body;

  // Create a nodemailer transporter
  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'amineelbouzidi36@gmail.com',
      pass: 'wzmh rwpa codi ypyb'
    }
  });

  // Define email options
  let mailOptions = {
    from: 'Ellaria Counters <amineelbouzidi36@gmail.com>',
    to: 'amineelbouzidi38@gmail.com',
    subject: 'New Contact Form Submission',
    text: `
      Subject: New Contact Form Submission

Dear [ZAKARIA],

You have received a new message from the contact form on your website. Here are the details:

---

Name: ${name}
Email: ${email}

---

Message:
${message}

---

Please respond to this message as soon as possible.


    `
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
