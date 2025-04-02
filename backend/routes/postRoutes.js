const express = require('express');
const { getPosts } = require('../controllers/postController');
const authenticateUser = require('../middleware/authMiddleware');

const router = express.Router();

// Route to get posts (protected route)
router.get('/', authenticateUser, getPosts);

module.exports = router;