const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('services/twilio.service')(accountSid, authToken);

export class TwilioService {

    private sendSMS(): void {
        client.messages
            .create({body: 'Hi there!', from: '+15017122661', to: '+15558675310'})
            .then(message => console.log(message.sid));
    }


}
