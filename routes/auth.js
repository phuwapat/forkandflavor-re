const express = require('express');
const router = express.Router();

const { register, login } = require('../controllers/auth');

//http://localhost:5000/api/auth
router.post('/register', register);
router.post('/login', login);

module.exports = router;
