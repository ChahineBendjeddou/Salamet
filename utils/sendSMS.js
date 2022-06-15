const accountSid = process.env.TwilioAccountSid // || 'ACc3a94f1e27e167310a8fe2109d015220';
const authToken = process.env.TwilioAuthToken // || 'e6c572dc95f1b1fef24f6ff45f77f0cc';
const client = require('twilio')(accountSid, authToken);


module.exports = async (message) => {
    client.messages
        .create({
            body: message,
            to: `+213672628437`,
            from: '+19804092494'
        })
        .then(message => console.log('message : ' + message))
        .catch(error => console.log('error ' + error))
        .done();
}
