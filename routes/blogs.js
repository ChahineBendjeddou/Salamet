const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');
const blogs = require('../controllers/blogs');
const multer = require('multer')

const { storage } = require('../cloudinary')
const upload = multer({ storage })

router.get('/getBlogs', blogs.sendBlogs)
router.post('/addBlog', upload.array('images'), blogs.addBlog)
module.exports = router;