const mongoose = require("mongoose");
const Blog = require("../models/BlogModel"); // import the blog model

exports.blogs_get_all = (req, res, next) => {
  Blog.find()
    .select("name _id detail blogImage")
    .exec()
    .then((docs) => {
      const response = {
        count: docs.length,
        blogs: docs.map((doc) => {
          return {
            _id: doc._id,
            blogImage: doc.blogImage,
            name: doc.name,
            detail: doc.detail,
            request: {
              type: "GET",
              url: "http://localhost:3000/blog/" + doc._id,
            },
          };
        }),
      };
      //if (docs.length >= 0) {
      res.status(200).json(response);
      // } else {
      // res.status(404).json({
      // message: "No Entries Found",
      //});
      // }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.blog_post = (req, res, next) => {
  const blog = new Blog({
    _id: mongoose.Types.ObjectId(),
    blogImage: req.file.path,
    name: req.body.name,
    detail: req.body.detail,
  });
  blog
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "Created Blog",
        createdBlog: {
          _id: result._id,
          blogImage: result.blogImage,
          name: result.name,
          detail: result.detail,
          request: {
            type: "GET",
            url: "http://localhost:3000/blog/" + result._id,
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.getby_id = (req, res, next) => {
  const id = req.params.blogId;
  Blog.findById(id)
    .select(" _id blogImage name detail")
    .exec()
    .then((doc) => {
      console.log("from database", doc);
      if (doc) {
        res.status(200).json({
          blog: doc,
          request: {
            type: "GET",
            desription: "Get all Blog",
            url: "http://localhost:3000/blog",
          },
        });
      } else {
        res
          .status(404)
          .json({ message: "No valid entry found for provided ID" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
};

exports.patchby_id = (req, res, next) => {
  const id = req.params.blogId;
  const updateOps = {};
  for (const ops in req.body) {
    updateOps[ops.propName] = ops.value;
  }
  Blog.update({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Blog Updated",
        request: {
          type: "GET",
          url: "http://localhost:3000/blog/" + id,
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.deleteby_id = (req, res, next) => {
  const id = req.params.blogId;
  Blog.remove({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: "Blog Deleted",
        request: {
          type: "POST",
          url: "http://localhost:3000/blog/",
          body: {
            blogImage: "JPEG/PNG",
            name: "Title of Blog",
            detail: "Details of Blog",
          },
        },
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};
