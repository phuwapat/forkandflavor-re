const Post = require('../models/Post');
const Comment = require('../models/Comment');

exports.addComment = async (req, res) => {
  try {
    const postId = req.params.id;
    const { content, rate, like } = req.body;
    const newComment = new Comment({ content, rate, like });
    await newComment.save();

    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).send('Post not found');
    }

    post.comments.push(newComment._id);
    await post.save();

    res.status(200).send(post);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.listComment = async (req, res) => {
  try {
    const commented = await Comment.find({}).exec();
    res.send(commented);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};

exports.deleteComment = async (req, res) => {
  try {
    const postId = req.params.postId;
    const commentId = req.params.commentId;

    // Find the post
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).send('Post not found');
    }

    // Find the index of the comment to be removed
    const commentIndex = post.comments.indexOf(commentId);
    if (commentIndex === -1) {
      return res.status(404).send('Comment not found in the post');
    }

    // Remove the comment from the comments array
    post.comments.splice(commentIndex, 1);
    await post.save();

    // Delete the comment document itself
    await Comment.findByIdAndDelete(commentId);

    res.status(200).send(post);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
};
