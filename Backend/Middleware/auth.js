const jwt = require('jsonwebtoken');
require('dotenv').config();

// Middleware vérification token 

module.exports = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, `${process.env.Token}`);
        const userId = decodedToken.userId;
        req.auth = { userId: userId };

        if (req.body.userId && req.body.userId !== userId) {
            throw 'Invalid user Id'
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Invalid request ! ')
        });
    }

};