"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwilioService = void 0;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('services/twilio.service')(accountSid, authToken);
class TwilioService {
    sendSMS() {
        client.messages
            .create({ body: 'Hi there!', from: '+15017122661', to: '+15558675310' })
            .then(message => console.log(message.sid));
    }
}
exports.TwilioService = TwilioService;
//# sourceMappingURL=twilio.service.js.map