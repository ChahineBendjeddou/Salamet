const accountSid = process.env.TwilioAccountSid
const authToken = process.env.TwilioAuthToken
const chahinesPhone = process.env.ChahinesPhone
const wafasPhone = process.env.WafasPhone
const client = require('twilio')(accountSid, authToken);


module.exports.sendSMS = async (message) => {
    client.messages
        .create({
            body: message,
            to: chahinesPhone,
            from: '+19804092494'
        })
        .then(message => console.log('message : ' + message))
        .catch(error => console.log('error ' + error))
        .done();
    client.messages
        .create({
            body: message,
            to: wafasPhone,
            from: '+19804092494'
        })
        .then(message => console.log('message : ' + message))
        .catch(error => console.log('error ' + error))
        .done();
}
