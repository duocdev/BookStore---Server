const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
require('dotenv').config({ path: './config/.env.local' })
const firebase = require('./config/firebase')
// create server instance
const server = express()
server.locals.firebase = firebase
// middleware
server.use(express.json())
server.use(helmet())
server.use(cors())
server.use(morgan('tiny'))
// routes
server.use('/api', require('./routes/index'))
// server listening
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB')
        server.listen(process.env.PORT, () => {
            console.log(`Server listening on port ${process.env.PORT}`)
        })
    })
    .catch(err => {
        console.log(err)
    })

