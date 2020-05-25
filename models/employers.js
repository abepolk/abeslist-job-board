const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employerSchema = Schema({
  username: { type: String, unique: true, required: true },
  password: String
})

const Employer = mongoose.model('Employer', employerSchema)

module.exports = Employer;