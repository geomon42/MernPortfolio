const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// for email sending
const cors = require("cors"); // for email sending
const cookieParser = require("cookie-parser");

require("dotenv/config");

// MiddleWares
app.use(morgan("dev"));
app.use("/uploads", express.static("uploads"));
// Boddy parser for your Model to render to url
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
// Allowing your API to Any Devices or Web Connections - PREVENT CORS ERRORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Request-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// admin pannel
const adminRouter = require("./api/routes/admin.router");
app.use("/admin", adminRouter);

// import user routes
const userRoutes = require("./api/routes/user");
app.use("/api/user", userRoutes);

// Blog Route
const blogRoutes = require("./api/routes/blog");

app.use("/api/blog", blogRoutes);
// send email
app.post("/email", (req, res) => {
  let data = req.body;
  let smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    secure: true,
    auth: {
      user: "jericdelacruz1991@gmail.com",
      pass: "0919223313jeric",
    },
  });

  let mailOptions = {
    from: data.email,
    to: "jericdelacruz1991@gmail.com",
    subject: `Client Inquiry from ${data.name}`,
    html: `
    
    <h3>Information From Sender</h3>
        <ul>
            <li>Name: ${data.name}</li>
            <li>Email: ${data.email}</li>
        </ul>

        <h3>Message</h3>
        <p>${data.message}</p>
    `,
  };

  smtpTransport.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    } else {
      console.log("Message Sent: %s", info.messageId);
    }
  });
  smtpTransport.close();
});
//error handling
app.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  console.log("connected to DB")
);
mongoose.set("useCreateIndex", true);

module.exports = app;
