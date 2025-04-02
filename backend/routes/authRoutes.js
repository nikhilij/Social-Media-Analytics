const express = require('express');
const { v4: uuidv4 } = require('uuid'); // For generating clientID
const User = require('../models/userModel'); // Import the User model
const { getAuthToken } = require('../services/authService'); // Import the token service
const router = express.Router();

// Existing /register route
router.post('/register', async (req, res) => {
    const { email, name, mobileNo, githubusername, rollNo, collegeName, accesscode } = req.body;

    if (!email || !name || !mobileNo || !githubusername || !rollNo || !collegeName || !accesscode) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const existingUser = await User.findOne({ email, rollNo, accesscode });
        if (existingUser) {
            return res.status(200).json({
                email: existingUser.email,
                name: existingUser.name,
                rollNo: existingUser.rollNo,
                accesscode: existingUser.accesscode,
                clientID: existingUser.clientID,
                clientsecret: existingUser.clientsecret,
            });
        }

        const clientID = uuidv4();
        const clientsecret = uuidv4();

        const newUser = new User({
            email,
            name,
            mobileNo,
            githubusername,
            rollNo,
            collegeName,
            accesscode,
            clientID,
            clientsecret,
        });

        await newUser.save();

        res.status(201).json({ message: 'User registered successfully', data: newUser });
    } catch (error) {
        console.error('Error registering user:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// New /auth route
router.post('/auth', async (req, res) => {
    const { email, name, rollNo, accesscode, clientID, clientsecret } = req.body;

    if (!email || !name || !rollNo || !accesscode || !clientID || !clientsecret) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    try {
        const tokenData = await getAuthToken(email, name, rollNo, accesscode, clientID, clientsecret);
        res.status(200).json(tokenData);
    } catch (error) {
        console.error('Error in /auth route:', error.message);
        res.status(500).json({ error: 'Failed to fetch authorization token' });
    }
});

module.exports = router;