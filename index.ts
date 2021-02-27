import {PersistRepository} from "./repository/persist.repository";
import bodyParser from 'body-parser'
import express from 'express';

const guests = require('./routes/guests.router');
const app = express();
const cors = require('cors')

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

PersistRepository.init();

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.use('/guests', guests);


app.listen(3000, function () {
  console.log('Listening on port 3000...')
})
