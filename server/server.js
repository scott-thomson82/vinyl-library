const path = require('path')
const express = require('express')

const server = express()

const recordRoutes = require('./routes/album')



server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/records', recordRoutes)

module.exports = server
