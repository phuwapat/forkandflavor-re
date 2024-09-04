const express = require('express');
const router = express.Router();

const { auth } = require('../middleware/auth');

const { read, list, create, update, remove } = require('../controllers/post');

const {
  addComment,
  listComment,
  deleteComment,
} = require('../controllers/comment');

//http://localhost:5000/api/product
router.get('/post', list);
router.get('/post/:id', read);
router.post('/post', create);
router.put('/post/:id', update);
router.delete('/post/:id', remove);

router.post('/comment/:id', addComment);
router.get('/comment', listComment);
router.delete('/comment/:postId/:commentId', deleteComment);

module.exports = router;
