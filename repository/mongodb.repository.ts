import {IGuest} from "../models/interfaces";

const mongoose = require('mongoose');
const Guest = require('../models/guests');


export class MongodbRepository {

    public static async initDBConnection() {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log('MongoDB connected');
    }

    public static async getGuestById(id: string) {
        try {
            return await Guest.findOne({'_id': id});
        } catch (err) {
            console.log(`getGuestById: error while try get guest id: ${id}`);
            return null;
        }
    }

    public static async updateGuestData(guest: IGuest) {
        try {
            const query = {'_id': guest._id};
            return await Guest.findOneAndUpdate(query, guest);
        } catch (err) {
            console.log(`error at getGuestById for guest: ${JSON.stringify(guest)}`);
            return null;
        }
    }

    public static async increaseVisits(id: string) {
        try {
            const query = {'_id': id}
            const guest: IGuest = await Guest.findOne(query);
            guest.visits = guest.visits ? guest.visits + 1 : 1;
            return await Guest.findOneAndUpdate(query, guest);
        } catch (err) {
            console.log(`error at getGuestById for id: ${id}`);
            return null;
        }
    }

}

