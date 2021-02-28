"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const persist_repository_1 = require("./repository/persist.repository");
const express_1 = __importDefault(require("express"));
const guests = require('./routes/guests.router');
const app = express_1.default();
const cors = require('cors');
app.use(cors());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
persist_repository_1.PersistRepository.init();
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.use('/guests', guests);
app.listen(3000, function () {
    console.log('Listening on port 3000...');
});
//# sourceMappingURL=index.js.map