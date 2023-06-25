const express = require('express')
const indexRouter = express.Router()

indexRouter.use('/user', require('./user.router'))



module.exports = indexRouter