const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
require('dotenv').config({ path: './config/local.env' })

const server = express()
// middleware
server.use(express.json())
server.use(helmet())
server.use(cors())

// routers



// server start
const port = process.env.EXPRESS_PORT || 5000
const CONNECT_MONGO_URI = process.env.CONNECT_MONGO_URI || ''

mongoose.connect(CONNECT_MONGO_URI)
    .then(() => {
        console.log('connected to db')
        server.listen(port, () => console.log(`server running on port ${port}`))
    })
    .catch(err => console.log(err))