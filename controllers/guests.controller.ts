import {MongodbRepository} from "../repository/mongodb.repository";

export class GuestsController {

    public static async getGuestById(req, res) {
        const {id} = req?.body;
        const response = await MongodbRepository.getGuestById(id);
        res.json(response);
    }

    public static async updateGuestData(req, res) {
        const {_id, name, phoneNumber, amountOfGuests, willArrive, message } = req?.body;
        const response = await MongodbRepository.updateGuestData({_id, name, phoneNumber, amountOfGuests, willArrive, message });
        res.json(response);
    }

}
