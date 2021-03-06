import {GuestsController} from "../controllers/guests.controller";

const express = require('express');
const router = express.Router();

router.post('/getGuestById', (req, res, next) => {
   GuestsController.getGuestById(req, res, next);
});

router.post('/updateGuestData', (req, res, next) => {
   GuestsController.updateGuestData(req, res, next);
});

module.exports = router;
