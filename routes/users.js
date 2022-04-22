const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const users = require('../controllers/users');

router.post('/register', catchAsync(users.register))

router.get('/getUser', users.sendUser)

router.post('/login', passport.authenticate('local', { failureRedirect: '/login' }), users.login)

router.post('/:id/update', catchAsync(users.updateUser))

router.get('/:id/delete', catchAsync(users.deleteUser))

router.get('/logout', users.logout)

module.exports = router;