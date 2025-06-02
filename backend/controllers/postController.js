const Post = require('../models/postModel');

const createPost = async (req, res, next) => {
  try {
    const { title, content } = req.body;

    const post = await Post.create({
      title,
      content,
      authorId: req.user._id,
    });

    // Add post reference to the user's posts array
    await User.findByIdAndUpdate(req.user._id, { $push: { posts: post._id } });

    res.status(201).json(post);

  } catch (err) {
    next(err)
  }
};

const getAllPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().populate('authorId', 'email').sort({ createdAt: -1 });
    
    res.json(posts);

  } catch (err) {
    next(err)
  }
};

const getPostsByAuthor = async (req, res, next) => {
  try {
    const { author } = req.query;

    const posts = await Post.find({ authorId: author }).sort({ createdAt: -1 });

    res.json(posts);

  } catch (err) {
    next(err)
  }
};

module.exports = { createPost, getAllPosts, getPostsByAuthor };