const mongoose = require('mongoose');

const commentSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    rate: {
      type: Number,
      min: 1,
      max: 5,
    },
    like: {
      type: Number,
      min: 0,
    },
  },
  { timestamps: true }
);

// Create the Comment model
const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;
