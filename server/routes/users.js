const express = require('express');
const { check, validationResult } = require('express-validator/check');
const moment = require('moment')

const router = express.Router();
const Person = require('../schemas/personalData');

router.post('/people', [
        check('name').matches(/^([a-zA-Z ]){2,30}$/),
        check('lastName').matches(/^([a-zA-Z ]){2,30}$/),
        check('email').matches(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/),
        check('date').matches(/^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/),
        check('date').isAfter(moment().subtract(1, 'day').format("YYYY-MM-DD"))
    ], (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
    Person.create(req.body).then(person => res.json(person));
});

module.exports = router;
