import {GuestsController} from "../controllers/guests.controller";

const express = require('express');
const router = express.Router();

router.post('/getGuestById', (req, res, next) => {
   GuestsController.getGuestById(req, res);
});

router.post('/updateGuestData', (req, res, next) => {
   GuestsController.updateGuestData(req, res);
});

router.post('/increaseVisits', (req, res, next) => {
   GuestsController.increaseVisits(req, res);
});

router.get('/currentStatus', ((req, res) => {
   GuestsController.currentStatus(req, res);
}))

router.get('/statistics', ((req, res) => {
   GuestsController.statistics(req, res);
}))

router.get('/downloadCsv', ((req, res) => {
   GuestsController.downloadCsv(req, res);
}))


module.exports = router;
