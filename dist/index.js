"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const persist_repository_1 = require("./repository/persist.repository");
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const guests = require('./routes/guests.router');
const app = express_1.default();
const cors = require('cors');
app.use(cors());
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
persist_repository_1.PersistRepository.init();
app.get('/', function (req, res) {
    res.send('Hello World!' +
        '');
});
app.use('/guests', guests);
const host = '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(+port, host, function () {
    console.log("Server started......");
});
//# sourceMappingURL=index.js.map