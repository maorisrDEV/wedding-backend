import {IGuest, IInsertGuest, IStatistics} from "../models/interfaces";

const json2csv = require('json2csv').parse;
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

    public static async currentStatus(): Promise<IGuest[]> {
        try {
            return await Guest.find({});
        } catch (err) {
            console.log(`currentStatus: got error, err: ${err}`);
            return null;
        }
    }

    public static async statistics(): Promise<IStatistics> {
        try {
            //region query db
            const amountOfDocsQuery = await Guest.find({});
            const amountOfInvitedGuestsQuery = await Guest.aggregate([
                {$group: {_id: null, amount: {$sum: "$amountOfInvited"}}}
            ]);
            const arrivingGuestsQuery = await Guest.aggregate([
                {$match: {willArrive: {$eq: "yes"}}},
                {$group: {_id: null, amount: {$sum: "$amountOfGuests"}}}
            ]);
            const arrivingInvitedGuestsQuery = await Guest.aggregate([
                {$match: {willArrive: {$eq: "yes"}}},
                {$group: {_id: null, amount: {$sum: "$amountOfInvited"}}}
            ]);
            const notArrivingGuestsQuery = await Guest.aggregate([
                {$match: {willArrive: {$eq: "no"}}},
                {$group: {_id: null, amount: {$sum: "$amountOfInvited"}}}
            ]);
            const respondedDocsQuery = await Guest.find({willArrive: {$nin: [null, ""]}});
            const respondedGuestsQuery = await Guest.aggregate([
                {$match: {willArrive: {$nin: [null, ""]}}},
                {$group: {_id: null, amount: {$sum: "$amountOfInvited"}}}
            ]);
            //endregion

            //region building response parameters
            const amountOfDocs = amountOfDocsQuery.length || 0;
            const amountOfInvitedGuests = amountOfInvitedGuestsQuery[0]?.amount || 0;
            const arrivingGuests = arrivingGuestsQuery[0]?.amount || 0;
            const arrivingInvitedGuests = arrivingInvitedGuestsQuery[0]?.amount || 0;
            const notArrivingGuests = notArrivingGuestsQuery[0]?.amount || 0;
            const respondedGuests = respondedGuestsQuery[0]?.amount || 0;
            const notRespondedGuests = Math.abs(amountOfInvitedGuests - respondedGuests);
            const respondedDocs = respondedDocsQuery.length || 0;
            const notRespondedDocs = amountOfDocs - respondedDocs;
            //endregion

            return {
                amountOfDocs,
                amountOfInvitedGuests,
                arrivingGuests,
                arrivingInvitedGuests,
                notArrivingGuests,
                respondedGuests,
                notRespondedGuests,
                respondedDocs,
                notRespondedDocs
            };
        } catch (err) {
            console.log(`statistics: got error, err: ${err}`);
            return null;
        }
    }

    public static async downloadCsv(): Promise<any> {
        try {
            const docs = await Guest.find({});
            const fields = ['name', 'phoneNumber', 'willArrive', 'message', 'updatedAt', 'visits', 'amountOfGuests', 'amountOfInvited'];
            const fieldNames = ['name', 'phoneNumber', 'willArrive', 'message', 'updatedAt', 'visits', 'amountOfGuests', 'amountOfInvited'];
            return json2csv({ data: docs, fields: fields, fieldNames: fieldNames });
        } catch (err) {
            console.log(`downloadCsv: got error, err: ${err}`);
            return null;
        }
    }

    public static async loadGuests(guests: IInsertGuest[]): Promise<any> {
        try {
           await Guest.collection.insert(guests);
            console.log('success on insert guests');
        } catch (err) {
            console.log(`loadGuests: got error, err: ${err}`);
            return null;
        }
    }


}

