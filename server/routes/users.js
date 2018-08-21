const express = require('express');
const router = express.Router();

const Person = require('../schemas/personalData');

router.post('/people', function(req, res){
    Person.create(req.body).then(function(person){
    res.send(person)
    });

});

module.exports = router;
