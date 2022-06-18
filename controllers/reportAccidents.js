const Accident = require('../models/accident')
const axios = require("axios");
const sms = require('../utils/sendSMS')

module.exports.report = async (req, res) => {
    const { phone, description, type, latitude, longitude } = req.body.report
    const accident = new Accident({ phone, description, type })
    const options = {
        method: 'GET',
        url: 'https://trueway-geocoding.p.rapidapi.com/ReverseGeocode',
        params: { location: `${latitude},${longitude}`, language: 'en' },
        headers: {
            'X-RapidAPI-Key': 'ddbc2c343emsh217a3aab6948e80p1db4adjsn71040e9446cc',
            'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
        }
    };
    accident.location = [latitude, longitude]
    accident.images = req.files.map(img => ({ url: img.path, filename: img.filename }))
    await accident.save()
    axios.request(options).then(function (response) {
        const location = response.data.results[4].address
        // sms.sendSMS(`Hello Sir/Mdm, an accident of (${type})  in "${location}" has been report, if you are on road or gonna be, please drive safe. Salamet`)
    }).catch(function (error) {
        console.error(error);
    });
    res.redirect('/')
}

module.exports.sendNumberOfAccidentsOfTheDay = async (req, res) => {
    const accidentsOfTheDay = await Accident.find({
        $where: function () {
            today = new Date();
            today.setHours(0, 0, 0, 0);
            return (this._id.getTimestamp() >= today)
        }
    })
    res.send(accidentsOfTheDay)
}


module.exports.sendAllAccidents = async (req, res) => {
    const accidents = await Accident.find({})
    res.send(accidents)
}