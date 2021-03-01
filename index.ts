import bodyParser from 'body-parser'
import express from 'express';
const mongoose = require('mongoose');
const guests = require('./routes/guests.router');

mongoose.connect('mongodb+srv://maor:34143414@cluster0.qxxnl.mongodb.net/wedding', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log('MongoDB connected');
});

const app = express();
const cors = require('cors')

app.use(cors());
// app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.send('Hello World!')
})

app.use('/guests', guests);

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(+port, host, function() {
    console.log("Server started......");
});
