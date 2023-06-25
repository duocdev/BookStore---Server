const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/user.model')

const userController = {}

userController.addUser = async (req, res) => {
    const { name, email, password } = req.body
    if (!name) return res.status(400).json({ error: 'Name is required!' })
    if (!email) return res.status(400).json({ error: 'Email is required!' })
    if (!password) return res.status(400).json({ error: 'Password is required!' })
    const hashPassword = await bcrypt.hash(password, 10)
    const user = new User({ name, email, password: hashPassword })
    try {
        await user.save()
        res.status(201).json({ message: 'User created successfully!' })
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

userController.getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users)
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

userController.login = async (req, res) => {
    const { email, password } = req.body
    if (!email) return res.status(400).json({ error: 'Email is required!' })
    if (!password) return res.status(400).json({ error: 'Password is required!' })
    try {
        const user = await User.findOne({ email }).select('+password')
        if (!user) return res.status(400).json({ error: 'Email is not found!' })
        const isMatch = await bcrypt.compare(password, user.password)
        if (!isMatch) return res.status(400).json({ error: 'Password is incorrect!' })
        const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET)
        res.status(200).json({ token })
    }
    catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = userController