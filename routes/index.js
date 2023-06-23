const express = require('express')
const router = express.Router()

router.route("/book", require('./book.router'))


module.exports = router