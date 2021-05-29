require('dotenv').config();
import {MongodbRepository} from "./repository/mongodb.repository";

const bodyParser = require('body-parser');
const express  = require('express');
const guests = require('./routes/guests.router');
const load = require('./routes/loadGuests.router');
const app = express();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
import * as swaggerDocument from "./routes/swagger.json";
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(cors());
app.use(bodyParser.json());
app.get('/', function (req, res) {
    res.send('Hello World!')
})
app.use('/guests', guests);
app.use('/load', load);

const host = '0.0.0.0';
const port = process.env.PORT || 3000;

MongodbRepository.initDBConnection().then(() => {
    app.listen(+port, host, function() {
        console.log(`Server started at port ${port}`);
    });
});




