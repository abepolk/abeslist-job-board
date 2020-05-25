const bcrypt = require('bcrypt')
const express = require('express')

const controller = express.Router()
const Seeker = require('../models/seekers.js');
const Employer = require('../models/employers.js');




controller.get('/new', (req, res) => {
  res.render('users/New')
})

controller.post('/', (req, res) => {
  const authType = req.session.authType;
  // If you have to use these if blocks outside of just session_controller.js and users_controller.js, you should create a seperate module with the blocks
  let User;
  if (authType === 'employer') {
      User = Employer;
  } else if(authType === 'seeker') {
      User = Seeker;
  } else {
      throw 'invalid authType';
  }
  req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
  User.create(req.body, (error, user) => {
    if (error) {
      console.error(error);
    } else {
    console.log('User is created', user)
    console.log('schema: ', user.schema);
    res.redirect('/sessions/new')
  }
  })
})

module.exports = controller;