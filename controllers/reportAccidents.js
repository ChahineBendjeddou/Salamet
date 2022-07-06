const Accident = require('../models/accident')
const axios = require("axios");
const sms = require('../utils/sendSMS')
const nodemailer = require("nodemailer");

module.exports.report = async (req, res) => {
    const { phone, description, type, latitude, longitude } = req.body.report
    console.log(longitude)
    console.log(latitude)
    const accident = new Accident({ phone, description, type })
    const options = {
        method: 'GET',
        url: 'https://trueway-geocoding.p.rapidapi.com/ReverseGeocode',
        params: { location: `${accident.location[0]},${accident.location[1]}`, language: 'en' },
        headers: {
            'X-RapidAPI-Key': 'ddbc2c343emsh217a3aab6948e80p1db4adjsn71040e9446cc',
            'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
        }
    };
    latitude ? accident.location = [latitude, longitude] : accident.location = [0, 0]
    accident.images = req.files.map(img => ({ url: img.path, filename: img.filename }))
    await accident.save()

    console.log(response.data.results[4])

    axios.request(options).then(async function (response) {
        let location
        response.data.results ? location = response.data.results[4].address : location = 'unknown location'
        await sms.sendSMS(`Hello Sir/Mdm, an accident of (${accident.type})  in "${location}" has been report, if you are on road or gonna be, please drive safe. Salamet`)
        await sendEmail(accident, location)
    }).catch(function (error) {
        console.error(error);
    });
}


module.exports.report = async (req, res) => {
    const { phone, description, type, latitude, longitude } = req.body.report
    const accident = new Accident({ phone, description, type })
    latitude ? accident.location = [latitude, longitude] : accident.location = [0, 0]
    accident.images = req.files.map(img => ({ url: img.path, filename: img.filename }))
    await accident.save()
    await getLocationAndSendMessage(accident)

    res.redirect('/')
}

module.exports.sendNumberOfAccidentsOfTheDay = async (req, res) => {
    const accidentsOfTheDay = await Accident.find({})

    const today = new Date()
    today.setHours(0, 0, 0, 0)

    let t = []
    accidentsOfTheDay.map(e => {
        if (e._id.getTimestamp() > today) t.push(e)
    })
    res.send(t)
}

module.exports.sendAllAccidents = async (req, res) => {
    const accidents = await Accident.find({})
    res.send(accidents)
}