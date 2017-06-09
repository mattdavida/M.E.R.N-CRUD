const express = require("express");
const Post = require("../model/posts");

const router = express.Router();

router.get("/", (req, res) => {
  Post.find().then((posts) => {
    res.json(posts);
  }).catch((err) => {
    res.status(500).json(err);
  });
});

router.get("/:id", (req, res) => {
  Post.findById(req.params["id"]).then((post) => {
    res.json(post);
  });
});

router.post("/", (req, res) => {
  let post = new Post();
  post.title = req.body.title;
  post.categories = req.body.categories;
  post.content = req.body.content;

  post.save().then((newPost) => {
    res.json(newPost);
  }).catch((err) => {
    res.status(400).json(err);
  });
});

router.delete("/:id", (req, res) => {
  Post.remove({_id: req.params.id}).then(() => {
    res.sendStatus(200);
  }).catch((err) => {
    res.status(500).json(err);
  });
});

module.exports = router;
