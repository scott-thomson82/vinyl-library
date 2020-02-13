const express = require('express')
const router = express.Router()

const db = require('../db/albums')

router.get('/', (req, res) => {
    db.getRecords()
    .then(records => {
    res.json(records)

    })
})






module.exports = router