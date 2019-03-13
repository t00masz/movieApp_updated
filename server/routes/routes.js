const express = require('express');
const { check, validationResult } = require('express-validator/check');
const router = express.Router();

const Movie = require('../schemas/movieData');
const Comment = require('../schemas/commentData');

router.get('/allMovies', (req, res, next) => {
    Movie.find({}).then(data => res.send(data))
});

router.post('/movies', [
    check('Title').matches(/^[\w ]{1,30}/),
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(422).json();
    }
    Movie.find({ Title: req.body.Title }, (err, docs) => { 
        if( docs.length === 0 ){
            Movie.create(req.body).then(movie => res.send(movie));            
        }
        else { 
            return res.status(400).json(); 
        }
    }); 
});

router.post('/comments', (req, res) => {
    Comment.create(req.body).then(comment => res.send(comment));
});

router.get('/allComments', (req, res, next) => {
    Comment.find({}).then(data => res.send(data))
});

module.exports = router;
