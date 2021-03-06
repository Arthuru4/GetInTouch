const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");
const cors = require("cors");
const creds = require("./config");

const transport = {
  host: creds.HOST,
  port: creds.PORT,
  auth: {
    user: creds.USER,
    pass: creds.PASS
  }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify(error => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages on port: 3002");
  }
});

router.post("/send", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.msg;
  const content = `name: ${name} \n email: ${email} \n message: ${message} `;
  console.log(`GOT message from user name[${name}], email[${email}].`);

  const mail = {
    from: name,
    to: creds.MAIL_TO,
    subject: "New Message from Contact Form",
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      console.log(
        `Message from user name[${name}], email[${email}] FALL WITH ERROR\n${err}`
      );

      res.json({
        status: "fail"
      });
    } else {
      console.log(
        `Message from user name[${name}], email[${email}] SUCCESSFULLY SENT`
      );

      res.json({
        status: "success"
      });
    }
  });
});

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(3002);
