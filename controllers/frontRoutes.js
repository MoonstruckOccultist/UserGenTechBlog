const router = require('express').Router();
const { User, Post, Comment } = require('../models');


router.get('/', async (req, res) => {
    try {
        res.render('homepage', {
            projects,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});