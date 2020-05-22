const express = require('express');
const bcrypt = require('bcrypt');

const controller = express.Router();
const User = require('../models/users.js')

controller.get('/new', (req, res) => {
    res.render('sessions/New');
})

controller.post('/', (req, res) => {
    //See if user exists
    User.findOne({ username: req.body.username }, (error, user) => {
        if (error) {
            //send error if error
            res.send(error);
        } else if (!user) {
            //send to sign up if user doesn't exist
            res.redirect('/users/new');
        } else {
            //compare passwords
            if (bcrypt.compareSync(req.body.password, user.password)) {
                //send to fruits page
                req.session.username = user.username;
                res.redirect('/');
            } else {
                //tell them its a wrong password
                res.send('Wrong Password');
            }
        }
    });
});

controller.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.redirect('/sessions/new');
    });
});

module.exports = controller;