import {MongodbRepository} from "../repository/mongodb.repository";

export class loadGuestsController {


    public static async loadGuests(req, res) {
        const guests = req?.body;
        // casting amountOfInvited from string to number
        guests.forEach(guest => {
            guest.amountOfInvited = +guest.amountOfInvited;
        })
        const response = await MongodbRepository.loadGuests(guests);
        res.json(response);
    }



}


