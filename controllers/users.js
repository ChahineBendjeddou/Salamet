const User = require('../models/user');



module.exports.register = async (req, res, next) => {
    try {
        const { firstname, lastname, username, email, password, phone, bloodType } = req.body
        const user = new User({ firstname, lastname, username, email, phone, bloodType })
        const registeredUser = await User.register(user, password)
        req.login(registeredUser, err => {
            if (err) return next(err)
            res.redirect('/')
        })
    } catch (error) {
        console.log('err : ', error)
        res.redirect('/register')
    }
}

module.exports.login = (req, res) => {
    res.redirect('/')
}
module.exports.sendUser = (req, res) => {
    res.send(req.user)
}

module.exports.updateUser = async (req, res, next) => {
    try {
        const { id } = req.params
        const user = await User.findByIdAndUpdate(id, { ...req.body }, { new: true })
        req.login(user, err => {
            if (err) return console.log(err)
        })
        res.redirect('/')
    } catch (err) { console.log('ERROR', err); }
}

module.exports.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.redirect('/')
}

module.exports.logout = (req, res) => {
    req.logout()
    res.redirect('/')
}