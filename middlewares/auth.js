const jwt = require('jsonwebtoken')

const auth = {}

auth.verifyToken = async (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers['x-access-token']
    if (!token) return res.status(401).json({ error: 'Token is empty!. Attach token to header or body or query!' })
    try {
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) return res.status(401).json({ error: 'Token is invalid!' })
            req.userId = decoded._id
            req.userRole = decoded.role
            next()
        })
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

auth.isAdmin = async (req, res, next) => {
    try {
        const role = req.userRole
        if (role !== 'admin') return res.status(403).json({ error: 'Require Admin Role!' })
        next()
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = auth