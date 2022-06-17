const express = require('express')
const router = express.Router()
const reportAccidents = require('../controllers/reportAccidents')
const multer = require('multer')

const { storage } = require('../cloudinary')
const upload = multer({ storage })

router.post('/', upload.array('images'), reportAccidents.report)

module.exports = router;