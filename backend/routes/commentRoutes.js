const express = require('express');
const { getPostComments } = require('../controllers/commentController');
const authenticateUser = require('../middleware/authMiddleware');

const router = express.Router();

// Route to get comments for a specific post (protected route)
router.get('/:postId', authenticateUser, getPostComments);

module.exports = router;