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
            res.render('Index', {jobs})
        }
    })
});

controller.get('/new', (req, res) => {
    res.render('New');
})

controller.get('/info/:id', (req, res) => {
    Job.findById(req.params.id, (error, job) => {
        if (error) {
            console.error(error);
        } else {
            const canEdit = req.session.username === job.owner;
            res.render('Show', {
                job,
                canEdit
            })
        }
    })
})

controller.get('/edit/:id', (req, res) => {
        Job.findById(req.params.id, (error, job) => {
        if (error) {
            console.error(error);
        } else {
            res.render('Edit', {job});
        }
    });
});

const parseJobForm = (data, username) => {
    const job = data;
    job.skills = job.skills.toLowerCase().split(/; */);
    job.owner = username;
}

controller.post('/', (req, res) => {
    parseJobForm(req.body, req.session.username)
    Job.create(req.body, (error, _) => {
        if (error) {
            console.error(error);
        } else {
            res.redirect('/');
        }
    })
})

controller.put('/:id', (req, res) => {
    parseJobForm(req.body, req.session.username);
    console.log(req.body);
    Job.findByIdAndUpdate(req.params.id, req.body, (error, job) => {
        if (error) {
            console.error(error);
        } else {
            res.redirect(`/info/${job._id}`);
        }
    });
});

controller.delete('/:id', (req, res) => {
    Job.findByIdAndRemove(req.params.id, (error, data) => {
        if (error) {
            console.error(error);
        } else {
            res.redirect('/');
        }
    })
})

module.exports = controller;