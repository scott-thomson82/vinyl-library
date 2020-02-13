const knex = require('knex')
const config = require('../../knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getRecords(db = connection) {
    return db('records').select()
}

function addAlbum(artist, album, genre) {
    return db('posts')
        .insert({
            artist: artist,
            album: album,
            genre: genre
            
        })
        .then(id => {
            return id[0]
        })

}

module.exports = {
    getRecords,
    addAlbum

}


