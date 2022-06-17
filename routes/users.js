const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const users = require('../controllers/users');
const reportAccidents = require('../controllers/reportAccidents')

router.post('/register', catchAsync(users.register))

router.get('/getUser', users.sendUser)
router.get('/getNumberOfAccidentsOfTheDay', reportAccidents.sendNumberOfAccidentsOfTheDay)

const isLocalAuthenticated = function (req, res, next) {
    passport.authenticate('local', function (err, user, info) {
        if (err) { return next(err); } //error exception

        // user will be set to false, if not authenticated
        if (!user) {
            // res.status(401).json(info.message);
            const errorMessage = encodeURIComponent(info.message)
            res.redirect(`/login/? ${errorMessage}`)
            // res.send(info.message);//info contains the error message
        } else {
            // if user authenticated maintain the session
            req.logIn(user, function () {
                // do whatever here on successful login
                res.redirect('/')
            })
        }
    })(req, res, next);
}
// router.post('/login', passport.authenticate('local', { failureRedirect: '/login', failureMessage: true }, (err, user, options) => {
//     res.send(options)

// }), users.login)
router.post('/login', isLocalAuthenticated)
// router.get('/login', (req, res) => {
//     res.send(req.query.err)
// })


router.post('/:id/update', catchAsync(users.updateUser))

router.get('/:id/delete', catchAsync(users.deleteUser))

router.get('/logout', users.logout)

module.exports = router;