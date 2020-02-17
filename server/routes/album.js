const express = require('express')
const router = express.Router()

const db = require('../db/albums')

router.get('/', (req, res) => {
    db.getRecords()
        .then(records => {
            res.json(records)
        })
})

router.post('/', (req, res) => {
    let record = req.body
    console.log(record)

    db.addRecord(record.artist, record.album, record.genre)
        .then(id => {
            db.getRecords(id)
                .then(response => {
                    res.json(response)
                })
        })
})

router.put('/:id', (req, res) => {
    let id = req.params.id
    let record = req.body

    db.updateRecord(id,record)
        .then(response => {
            getRecords(response)
            res.json(response)
        })
})

router.delete('/:id', (req, res) => {
    let record = req.params
    db.deleteRecord(record.id)
        .then(response => {
            res.json(response)
        })
})









module.exports = router