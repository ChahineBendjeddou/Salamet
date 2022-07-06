const whitelist = [
    'http://127.0.0.1:3000',
    'http://127.0.0.1:5000',
    'https://salamet.herokuapp.com',
    'http://salamet.herokuapp.com',
    'https://cloudinary.com',
    'http://cloudinary.com',
    'https://cloud.mongodb.com',
    'http://cloud.mongodb.com'
]
module.exports.corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            console.log("** Origin of request accepted " + origin)
            console.log("Origin acceptable")
            callback(null, true)
        } else {
            console.log("** Origin of request not accepted" + origin)
            console.log("Origin rejected")
            callback(new Error('Not allowed by CORS'))
        }
    }
}