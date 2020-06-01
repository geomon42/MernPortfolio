const express = require("express");
const router = express.Router();
const checkAuth = require("../middleware/check-auth");
const multer = require("multer"); // install multer for file parser (images and files)
const blogController = require("../controllers/blog"); // import blog controller

//Import Blog Model
const Blog = require("../models/BlogModel");

// set configurations and disk storage location on upload files and images
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/blog");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 10,
  },
  fileFilter: fileFilter,
}); //set filter mimetype of uploaded images

router.get("/", blogController.blogs_get_all); // use the blog controller for MVC standard
router.post(
  "/",
  checkAuth,
  upload.single("blogImage"),
  blogController.blog_post
);

router.get("/:blogId", blogController.getby_id);

router.patch("/:blogId", checkAuth, blogController.patchby_id);

router.delete("/:blogId", checkAuth, blogController.deleteby_id);

module.exports = router;
