import {PersistRepository} from "../repository/persist.repository";

export class GuestsController {

    public static async getById(req, res, next) {
        const {id} = req?.body || {id: '0527505776'};
        const response = await PersistRepository.getItem(id);
        res.json(response);
    }

    public static async setGuests(req, res, next) {
        const {id, numOfGuests, willArrive} = req?.body || {id: '0527505776', numOfGuests: 1, willArrive: 'yes'};
        const response = await PersistRepository.setItem(id,{numOfGuests, willArrive});
        res.json(response);
    }

}
