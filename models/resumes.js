const mongoose = require('mongoose')
const Schema = mongoose.Schema

const resumeSchema = Schema({
  username: String,
  resume: String,
  skills: [String]
})

const Resume = mongoose.model('Resume', resumeSchema)

module.exports = Resume;