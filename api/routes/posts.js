const express = require('express');
const router = express.Router();
const Posts = require("../models/Posts")

router.post('/', async (req, res, next) => {
  try {
    const name = req.body?.name;
    let post = await Posts.findOne({name: name});

    if (post) {
      res.status(404);
      res.send(`${name} already exists...`);
    } else {
      post = new Posts({...req.body});
      await post.save();
      res.send(`${name} created successfully!!`);
    }
  } catch (e) {
    res.status(400);
    res.send(e.message);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const posts = await Posts.find()
    res.send(posts)
  } catch (e) {
    res.status(400);
    res.send(e.message);
  }
})

module.exports = router;
