const authenticateUser = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ error: 'Access Denied' });

    if (token !== `Bearer ${process.env.ACCESS_TOKEN}`) {
        return res.status(403).json({ error: 'Invalid Token' });
    }
    
    next();
};

module.exports = authenticateUser;
