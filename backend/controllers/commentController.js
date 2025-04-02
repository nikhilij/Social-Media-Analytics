const apiService = require('../services/apiService');

const getPostComments = async (req, res) => {
    try {
        const { postId } = req.params;
        const comments = await apiService.fetchComments(postId);
        res.json(comments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getPostComments };
