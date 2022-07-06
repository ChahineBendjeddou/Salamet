const Accident = require('../models/accident')
const axios = require("axios");
const sms = require('../utils/sendSMS')
const nodemailer = require("nodemailer");



const sendEmail = async ({ type, createdAt, phone, description, images }, location) => {
    const imageUrl = images[0].url ? images[0].url : ''
    console.log(imageUrl)
    let allImages = ''
    images.forEach(image => {
        allImages += `<img src='${image.url}' alt='' style="width:25%;height:10em;margin:2em 1em"/>`
    })
    const mail = `
    <h1>Reporting an accident</h1>
    <h3>A new Accident Has been reported </h3>
    <ul>
        <li>Location : ${location}</li>
        <li>Involved : ${type}</li>
        <li>Date & Time : ${createdAt}</li>
        <li>Description : ${description}</li>
        <li>Phone of the Reporter : ${phone}</li>
        ${allImages}
    </ul>
    `

    const user = process.env.SALAMET_EMAIL
    const pass = process.env.SALAMET_PWD
    console.log(user)
    console.log(pass)
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user, // generated ethereal user
            pass// generated ethereal password
        },
        tlf: { rejectUnauthorized: false }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `Salamet Agency ${process.env.SALAMET_EMAIL}`,
        to: ['chahine.bendjeddou99@gmail.com', 'benwafa951@gmail.com'], // list of receivers
        subject: "Declare a Reported Accident", // Subject line
        text: "Hello world?", // plain text body
        html: mail, // html body
    });

    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}
const getLocationAndSendMessage = async (accident) => {
    const options = {
        method: 'GET',
        url: 'https://trueway-geocoding.p.rapidapi.com/ReverseGeocode',
        params: { location: `${accident.location[0]},${accident.location[1]}`, language: 'en' },
        headers: {
            'X-RapidAPI-Key': 'ddbc2c343emsh217a3aab6948e80p1db4adjsn71040e9446cc',
            'X-RapidAPI-Host': 'trueway-geocoding.p.rapidapi.com'
        }
    };
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