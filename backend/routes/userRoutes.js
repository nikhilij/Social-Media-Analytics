const express = require('express');
const { getTopUsers } = require('../controllers/userController');
const authenticateUser = require('../middleware/authMiddleware');

const router = express.Router();

// Route to get top users (protected route)
router.get('/', authenticateUser, getTopUsers);

module.exports = router;