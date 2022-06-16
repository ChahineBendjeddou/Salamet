const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const blogs = require('../controllers/blogs');
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })


router.post('/addBlog', upload.array('images', 10), (req, res) => {
    console.log(req.files)
    res.redirect('/BlogHome')
})
module.exports = router;