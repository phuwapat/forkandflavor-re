const mongoose = require('mongoose');

const postSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    ingredient: {
      type: String,
      required: true,
    },
    gastronomy: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model('Post', postSchema);
