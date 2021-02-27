import {GuestsController} from "../controllers/guests.controller";

const express = require('express');
const router = express.Router();

router.post('/getById', (req, res, next) => {
   GuestsController.getById(req, res, next);
});

module.exports = router;
