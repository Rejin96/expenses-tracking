const jwt = require('jsonwebtoken');
const User = require('../models/userModel'); // Adjust the path to your User model
require('dotenv').config();

const authUser = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).send({ message: 'Authentication token is required' });
    }

    try {
        const decoded = jwt.verify(token, "SECRETKEY");
        const user = await User.findById(decoded._id); // Use decoded._id here

        if (!user) {
            throw new Error('User not found');
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ message: 'Invalid token', error: error.message });
    }
};

module.exports = authUser;
