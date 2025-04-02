const axios = require('axios');

const getAuthToken = async (email, name, rollNo, accesscode, clientID, clientsecret) => {
    try {
        const response = await axios.post('http://20.244.56.144/evaluation-service/auth', {
            email,
            name,
            rollNo,
            accesscode,
            clientID,
            clientsecret,
        });

        if (response.status === 200) {
            const { token_type, access_token } = response.data;
            return { token_type, access_token };
        } else {
            throw new Error(`Failed to fetch token: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching authorization token:', error.message);
        throw error;
    }
};

module.exports = { getAuthToken };