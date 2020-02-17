const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getRecords(db = connection) {
    return db('records').select()
}

function addRecord(artist, album, genre, db = connection) {
    return db('records')
        .insert({
            artist: artist,
            album: album,
            genre: genre

        })
        .then(id => {
            return id[0]
        })
}


function updateRecord(id, record,  db = connection) {
    return db('records')
        .where('id', id)
        .update (record)
}

function deleteRecord(id, db = connection) {
    return db('records')
        .where('id', id)
        .del()
}



module.exports = {
    getRecords,
    addRecord,
    updateRecord,
    deleteRecord

}


