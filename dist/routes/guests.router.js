"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const guests_controller_1 = require("../controllers/guests.controller");
const express = require('express');
const router = express.Router();
router.post('/getById', (req, res, next) => {
    guests_controller_1.GuestsController.getById(req, res, next);
});
module.exports = router;
//# sourceMappingURL=guests.router.js.map