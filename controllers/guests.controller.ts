import {MongodbRepository} from "../repository/mongodb.repository";

export class GuestsController {

    public static async getById(req, res, next) {
        const {id} = req?.body || {id: '0527505776'};
        const response = await MongodbRepository.getItem(id);
        res.json(response);
    }

    public static async setGuests(req, res, next) {
        const object = {
            name: 'omri',
            phoneNumber: '0524599427',
            amountOfGuests: 1,
            willArrive: 'yes'
        };
        const response = await MongodbRepository.setItem(object);
        res.json(response);
    }

}
