const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const Post = require("./model/posts");

const port = process.env.PORT || 3000;
const app = express();

const posts = require("./api/posts");

mongoose.connect("mongodb://test:test@ds119302.mlab.com:19302/posts").then(() => {
  console.log("connected to the DB");
});

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api/post", posts);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "index.html"));
});

app.listen(port);
console.log("server started");
