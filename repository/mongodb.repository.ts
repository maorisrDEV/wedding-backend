const Guest = require('../models/Guests');


export class MongodbRepository {

    public static async setItem(object: any) {
        const instance = new Guest(object);
        return await instance.save()
    }

    public static async getItem(key: string) {
        return await Guest.find();
    }

}
