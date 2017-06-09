const mongoose = require("mongoose");

let postSchema = new mongoose.Schema({
  title: String,
  categories: String,
  content: String
})

module.exports = mongoose.model("Post", postSchema);
