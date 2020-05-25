const express = require('express');
const bcrypt = require('bcrypt');

const controller = express.Router();
const Seeker = require('../models/seekers.js');
const Employer = require('../models/employers.js');

controller.get('/new', (req, res) => {
    // Immediately after creating a new user session is not 'none' and we should redirect to the route /new/<authtype>
    if (req.session.authType !== 'none') {
        res.redirect(`/sessions/new/${req.session.authType}`)
    }
    res.render('sessions/ChooseLogin');
})

controller.get('/new/employer', (req, res) => {
    const authType = req.session.authType = 'employer'
    res.render('sessions/Login', {
        authType
    });
})
controller.get('/new/seeker', (req, res) => {
    const authType = req.session.authType = 'seeker'
    res.render('sessions/Login', {
        authType
    });
})

controller.post('/', (req, res) => {
    const authType = req.session.authType;
    let User;
    if (authType === 'employer') {
        User = Employer;
    } else if(authType === 'seeker') {
        User = Seeker;
    } else {
        throw 'invalid authType';
    }

    //See if user exists
    User.findOne({ username: req.body.username }, (error, user) => {
        if (error) {
            //send error if error
            res.send(error);
        } else if (!user) {
            res.send('user does not exist')
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
        res.redirect('/');
    });
});

module.exports = controller;