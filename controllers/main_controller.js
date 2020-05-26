const express = require('express');

const controller = express.Router();
const Job = require('../models/jobs.js');
const Seeker = require('../models/seekers.js')

/*
Comment out because login is no longer required for Index and Show

controller.use((req, res, next) => {
    if (req.session.username) {
        return next();
    } else {
        res.redirect('/sessions/new');
    }
});
*/

controller.get('/', (req, res) => {
    Job.find({}, (error, jobs) => {
        if (error) {
            console.error(error);
        } else {
            res.render('Index', {
                jobs,
                authType: req.session.authType,
                username: req.session.username
            })
        }
    })
});

controller.get('/myjobs', (req, res) => {
    // TODO Need to limit this and other routes to relevant or authorized users
    Job.find({owner: req.session.username}, (error, jobs) => {
        if (error) {
            console.error(error);
        } else {
            res.render('MyJobs', {
                jobs
            })
        }
    })
})

controller.get('/new', (req, res) => {
    res.render('New');
})

controller.get('/info/:id', (req, res) => {
    Job.findById(req.params.id, (error, job) => {
        if (error) {
            console.error(error);
        } else {
            const isOwner = req.session.authType === 'employer' && req.session.username === job.owner;
            const canApply = req.session.authType === 'seeker';
            res.render('Show', {
                job,
                canApply,
                isOwner,
                authType: req.session.authType
            });
        }
    });
});

controller.get('/edit/:id', (req, res) => {
    Job.findById(req.params.id, (error, job) => {
        if (error) {
            console.error(error);
        } else {
            res.render('Edit', {
                job,
                authType: req.session.authType
            });
        }
    });
});

controller.get('/resume', (req, res) => {
    if (req.session.authType !== 'seeker') {
        res.send('Only job seekers can upload resume and skills');
    }
    res.render('Resume', {
        username: req.session.username
    });
});

controller.get('/apply/:id', (req, res) => {
    if (req.session.authType !== 'seeker') {
        res.send('Only job seekers can upload resume and skills');
    }
    req.session.applyJobId = req.params.id;
    Job.findById(req.params.id, (error, job) => {
        if (error) {
            console.error(error);
        } else {
            Seeker.findOne({username: req.session.username}, (error, seeker) => {
                if (error) {
                    console.error(error);
                } else {
                    res.render('Apply', {
                    job,
                    seeker
                })
            }});
        }
    });
});

controller.get('/showApplications/:id', (req, res) => {
    Job.findById(req.params.id, (error, job) => {
        if (error) {
            console.error(error);
        } else if (req.session.username !== job.owner) {
            res.send('Unauthorized'); // send HTTP 401?
        }
        job.applications.forEach((application) => {
            application.numMatchingSkills = application.skills.filter((skill) => {
                return job.skills.includes(skill)
            }).length;
        });
        res.render('ShowApplications', {job});
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
    });
});

controller.post('/resume', (req, res) => {
    const skills = req.body.skills.toLowerCase().split(/; */);
    Seeker.findOneAndUpdate({username: req.session.username}, {resume: req.body.resume, skills: skills}, (error, seeker) => {
        if (error) {
            console.error(error);
        } else {
            res.redirect('/');
        }
    });
});

controller.post('/apply', (req, res) => {
    req.body.skills = req.body.skills.toLowerCase().split(/; */);
    Job.findByIdAndUpdate(req.session.applyJobId, {
        $addToSet: {
            applications: req.body
        }
    }, (error, job) => {
        if (error) {
            console.error(error);
        } else {
            console.log('apply route: job: ' + job)
            res.redirect('/');
        }
    })
});

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