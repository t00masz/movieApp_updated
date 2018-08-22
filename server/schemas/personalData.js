const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonalData = new Schema({
    name: {
        type: String,
        required: [true, 'Name is incorrect.']
    },
    lastName: {
        type: String,
        required: [true, 'Last name is incorrect.']
    },
    email: {
        type: String,
        required: [true, 'E-mail address is incorrect.']
    },
    date: {
        type: String,
        required: [true, 'Data is incorrect.']
    },
    });

const Person = mongoose.model('person', PersonalData);

module.exports = Person;