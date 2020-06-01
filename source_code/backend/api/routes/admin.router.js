const AdminBro = require("admin-bro"); //install and import Adminbro pannel for nodejs
const AdminBroExpress = require("admin-bro-expressjs"); // install and import adminbroexpress
const AdminBroMongoose = require("admin-bro-mongoose");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const formidableMiddleware = require("express-formidable");
app.use(formidableMiddleware());

// import Models

const Blog = require("../models/BlogModel");
const services = require("../models/ServicesModel");
const User = require("../models/user");
AdminBro.registerAdapter(AdminBroMongoose);

const adminBro = new AdminBro({
  databases: [mongoose],
  rootPath: "/admin",
  branding: {
    logo:
      "https://scontent.fmnl4-3.fna.fbcdn.net/v/t1.0-9/p960x960/82903292_118351216360258_7718279543441588224_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_eui2=AeFtWf2JFNVlKbO9xvHpnubuJSC8oVy5EH8lILyhXLkQf_mtorQ_uedcZrCK7lF_QkU&_nc_ohc=CUmw0ti_O8kAX9sI1fK&_nc_ht=scontent.fmnl4-3.fna&_nc_tp=6&oh=ee5b82680e560004203521011956365c&oe=5EE9BBC0",
    companyName: "My Freelance Portfolio",
    softwareBrothers: false,
  },
});

const ADMIN = {
  email: process.env.ADMIN_EMAIL || "jericdelacruz1991@gmail.com",
  password: process.env.ADMIN_PASSWORD || "0919223313jeric",
};

module.exports = adminRouter = AdminBroExpress.buildRouter(adminBro);
