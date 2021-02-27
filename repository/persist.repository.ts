const storage = require('node-persist');

export class PersistRepository {

    public static init() {
        storage.init( /* options ... */);
    }

    public static async setItem(key: string, value: any) {
        return await storage.setItem(key, value);
    }

    public static async getItem(key: string) {
        return await storage.getItem(key);
    }

}
