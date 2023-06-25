const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/user.controller')
const auth = require('../middlewares/auth')

userRouter.post('/add', auth.verifyToken, auth.isAdmin, userController.addUser)
userRouter.get('/', userController.getUsers)
userRouter.post('/login', userController.login)


module.exports = userRouter