const Accident = require('../models/accident')

module.exports.report = async (req, res) => {
    const { phone, description, type, latitude, longitude } = req.body.report
    const accident = new Accident({ phone, description, type })
    accident.location = [latitude, longitude]
    accident.images = req.files.map(img => ({ url: img.path, filename: img.filename }))
    await accident.save()
    console.log(accident)
    res.redirect('/')
}