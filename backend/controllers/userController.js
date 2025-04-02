const apiService = require('../services/apiService');

const getTopUsers = async (req, res) => {
    try {
        const users = await apiService.fetchUsers();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getTopUsers };
