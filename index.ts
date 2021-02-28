import {PersistRepository} from "./repository/persist.repository";
import bodyParser from 'body-parser'
import express from 'express';

const guests = require('./routes/guests.router');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

PersistRepository.init();

app.get('/', function (req, res) {
    res.send('Hello World!' +
        '')
})

app.use('/guests', guests);

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(+port, host, function() {
    console.log("Server started......");
});
