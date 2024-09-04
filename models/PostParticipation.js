const mongoose = require('mongoose');

const postParticipantSchema = mongoose.Schema(
  {
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    post: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Post',
      },
    ],
    comment: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  { timestamps: true }
);

// Create the Comment model
const PostParticipant = mongoose.model(
  'PostParticipant',
  postParticipantSchema
);

module.exports = { PostParticipant };
