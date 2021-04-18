import {MongodbRepository} from "../repository/mongodb.repository";

export class GuestsController {

    public static async getGuestById(req, res) {
        const {id} = req?.body;
        const response = await MongodbRepository.getGuestById(id);
        res.json(response);
    }

    public static async updateGuestData(req, res) {
        const {_id, name, phoneNumber, amountOfGuests, willArrive, message, visits} = req?.body;
        const response = await MongodbRepository.updateGuestData({
            _id,
            name,
            phoneNumber,
            amountOfGuests,
            willArrive,
            message,
            visits
        });
        res.json(response);
    }

    public static async increaseVisits(req, res) {
        const {id} = req?.body;
        const response = await MongodbRepository.increaseVisits(id);
        res.json(response);
    }


    public static async currentStatus(req, res) {
        const response = await MongodbRepository.currentStatus();
        res.json(response);
    }

    public static async statistics(req, res) {
        const response = await MongodbRepository.statistics();
        res.json(response);
    }

    public static async downloadCsv(req, res) {
        const csv = await MongodbRepository.downloadCsv();
        res.attachment('guests.csv');
        res.status(200).send(csv);
    }


}
