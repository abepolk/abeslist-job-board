const mongoose = require('mongoose')
const Schema = mongoose.Schema

const seekerSchema = Schema({
  username: { type: String, unique: true, required: true },
  password: String,
  resume: String,
  skills: [String]
})

const Seeker = mongoose.model('Seeker', seekerSchema)

module.exports = Seeker;