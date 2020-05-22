const bcrypt = require('bcrypt')
const express = require('express')

const controller = express.Router()
const User = require('../models/users.js')




controller.get('/new', (req, res) => {
  res.render('users/new')
})

controller.post('/', (req, res) => {
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (error, user) => {
    if (error) {
      console.error(error);
    } else {
    console.log('user is created', user)
    res.redirect('/sessions/new')
  }
  })
})

module.exports = controller;