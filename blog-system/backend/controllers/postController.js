const Post = require('../models/Post'); const 
getPosts = async (req, res) => {
  const posts = await Post.find().populate('author', 
  'username'); res.json(posts);
};
const getPostById = async (req, res) => { const post 
  = await 
  Post.findById(req.params.id).populate('author', 
  'username'); if (post) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' 
    });
  }
};
const createPost = async (req, res) => { const { 
  title, content } = req.body; const post = new 
  Post({ title, content, author: req.user.id }); 
  await post.save(); res.status(201).json(post);
};
const updatePost = async (req, res) => { const post 
  = await Post.findById(req.params.id); if (post) {
    post.title = req.body.title || post.title; 
    post.content = req.body.content || post.content; 
    const updatedPost = await post.save(); 
    res.json(updatedPost);
  } else {
    res.status(404).json({ message: 'Post not found' 
    });
  }
};
const deletePost = async (req, res) => { const post 
  = await Post.findById(req.params.id); if (post) {
    await post.remove(); res.json({ message: 'Post 
    removed' });
  } else {
    res.status(404).json({ message: 'Post not found' 
    });
  }
};
module.exports = { getPosts, getPostById, 
createPost, updatePost, deletePost };
