const Accident = require('../models/accident')
const axios = require("axios");
const sms = require('../utils/sendSMS')

module.exports.report = async (req, res) => {
    const { phone, description, type, latitude, longitude } = req.body.report
    const accident = new Accident({ phone, description, type })
    accident.location = [latitude, longitude]
    accident.images = req.files.map(img => ({ url: img.path, filename: img.filename }))
    await accident.save()
    // console.log(accident)




    // const options = {
    //     method: 'GET',
    //     url: 'https://trueway-geocoding.p.rapidapi.com/ReverseGeocode',
    //     params: { location: `${latitude},${longitude}`, language: 'en' },
    //     headers: {
    //         'X-RapidAPI-Key': 'ddbc2c343emsh217a3aab6948e80p1db4adjsn71040e9446cc',
    //         'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
    //     }
    // };

    // axios.request(options).then(function (response) {
    //     console.log(response.data.results[4].address);
    //     const location = response.data.results[4].address
    //     sms.sendSMS(`Hello Sir/Mdm, an accident of (${type})  in "${location}" has been report, if you are on road or gonna be, please drive safe. Salamet`)
    // }).catch(function (error) {
    //     console.error(error);
    // });
    res.redirect('/')
}