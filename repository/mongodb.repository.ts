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

    public static async setItem(object: any) {
        const instance = new Guest(object);
        return await instance.save()
    }

    public static async getItem(id: string) {
        return await Guest.find({id:  id});
    }

}
