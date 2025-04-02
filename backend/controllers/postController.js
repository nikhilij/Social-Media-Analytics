const apiService = require('../services/apiService');

const getPosts = async (req, res) => {
    try {
        const { type } = req.query;
        const posts = await apiService.fetchPosts(type);
        res.json(posts);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getPosts };
