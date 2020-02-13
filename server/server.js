const path = require('path')
const express = require('express')

const server = express()

const recordRoutes = require('./routes/album')

server.use('/api/records', recordRoutes)

server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
