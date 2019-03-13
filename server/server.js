const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const app = express();
const PORT = process.env.PORT || 5000

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/movieapp_database', { useNewUrlParser: true }, error => {
    if (error) { 
        console.log(`Database is not connected. Program needs to be restarted after connecting with database.`)
    }
    else {
        console.log(`Database is connected.`)
    }
})

mongoose.Promise = global.Promise
app.use(routes);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})
