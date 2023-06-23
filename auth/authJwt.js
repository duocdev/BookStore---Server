const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.headers['authorization'] || req.body.token || req.query.token;

    if (!token)
        return res.status(403).json({ message: 'No token provided' });

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err)
            return res.status(401).json({ message: 'Unauthorized' });

        req.userId = decoded.id;
        next();
    });
}

const isAdmin = (req, res, next) => {
    User.findById(req.userId)
        .then(user => {
            if (!user.isAdmin)
                return res.status(403).json({ message: 'Require Admin Role!' });
            next();
        })
}

const authJwt = {
    verifyToken,
    isAdmin
}