import {loadGuestsController} from "./loadGuests.controller";

const express = require('express');
const router = express.Router();

router.post('/guests', (req, res, next) => {
    loadGuestsController.loadGuests(req, res);
});

module.exports = router;
