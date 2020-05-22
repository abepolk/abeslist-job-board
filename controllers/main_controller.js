const express = require('express');
const controller = express.Router();

controller.use((req, res, next) => {
    if (req.session.username) {
        return next();
    } else {
        res.redirect('/sessions/new');
    }
});

controller.get('/', (req, res) => {
    res.send('Hello world');
});

module.exports = controller;