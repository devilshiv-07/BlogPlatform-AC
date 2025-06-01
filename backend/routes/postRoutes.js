const express = require('express');
const router = express.Router();
const { createPost, getAllPosts, getPostsByAuthor } = require('../controllers/postController');
const { isVerifiedUser } = require("../middlewares/tokenVerification");

router.post('/post', isVerifiedUser, createPost);
router.get('/posts', (req, res, next) => {
  try {
    if (req.query.author) return getPostsByAuthor(req, res, next);
    else return getAllPosts(req, res, next);

  } catch (error) {
    next(error);
  }
});

module.exports = router;