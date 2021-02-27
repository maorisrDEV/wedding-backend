import {PersistRepository} from "../repository/persist.repository";

export class GuestsController {

    public static async getById(req, res, next) {
        const {id} = req?.body || {id: ''};
        const response = await PersistRepository.getItem(id);
        res.json(response);
    }

}
