const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

router.get('/:userId', async (req, res) => {
  try {
    const posts = await Post.find({ author: req.params.userId }).populate('author', 'username');
    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;