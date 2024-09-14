const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Import the cors middleware

const app = express();
const port = 4001;

app.use(bodyParser.json());
app.use(cors()); // Use cors middleware

app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, services, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'emailverificatio548@gmail.com',
      pass: 'jsjplpnvzekthbvx',
    },
  });

  const mailOptions = {
    from: 'emailverificatio548@gmail.com',
    to: 'shubham@insecsys.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nServices: ${services}\nMessage: ${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.sendStatus(200);
  } catch (error) {
    console.error('Error sending email:', error);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
