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
        return await Guest.findById(id);
    }

    public static async updateGuestData(guest: IGuest) {
        const query = {'_id': guest._id};
        return await Guest.findOneAndUpdate(query, guest);
    }


}

