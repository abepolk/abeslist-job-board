const express = require('express');

const controller = express.Router();
const Job = require('../models/jobs.js');

controller.use((req, res, next) => {
    if (req.session.username) {
        return next();
    } else {
        res.redirect('/sessions/new');
    }
});

controller.get('/', (req, res) => {
    Job.find({}, (error, jobs) => {
        if (error) {
            console.error(error);
        } else {
            res.render('Index', {
                jobs
            })
        }
    })
});

controller.get('/new', (req, res) => {
    res.render('New');
})

controller.post('/', (req, res) => {
    req.body.skills = req.body.skills.toLowerCase().split(/; */);
    Job.create(req.body, (error, _) => {
        if (error) {
            console.error(error);
        } else {
            res.redirect('/');
        }
    })
})

module.exports = controller;