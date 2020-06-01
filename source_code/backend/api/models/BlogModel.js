const mongoose = require("mongoose");

const blogSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  blogImage: { type: String, required: true },
  name: { type: String, required: true },
  detail: { type: String, required: true },
});
module.exports = mongoose.model("Blog", blogSchema);
