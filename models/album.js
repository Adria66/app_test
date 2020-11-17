const mongoose = require('mongoose')
const Schema = mongoose.Schema

const albumSchema = new Schema({
    title: {type: String},
    artist: {type: String},
    genre: {type: String},
    songs: {type: [String]},
    company: {type: String},
    year: {type: Number},
})

const Album = mongoose.model('Album', albumSchema)

module.exports = Album