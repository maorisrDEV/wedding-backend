import {MongodbRepository} from "../repository/mongodb.repository";

export class loadGuestsController {


    public static async loadGuests(req, res) {
        const guests = req?.body;
        const response = await MongodbRepository.loadGuests(guests);
        res.json(response);
    }



}


