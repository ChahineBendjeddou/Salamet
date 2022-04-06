const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors')
const DataBase = require('./database')
const userRoutes = require('./routes/users');
const blogRoutes = require('./routes/blogs');

// ** MIDDLEWARE ** //
const whitelist = ['http://localhost:3000', 'http://localhost:5000', 'https://salamet.herokuapp.com/']
const corsOptions = {
    origin: function (origin, callback) {
        console.log("** Origin of request " + origin)
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            console.log("Origin acceptable")
            callback(null, true)
        } else {
            console.log("Origin rejected")
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions))

app.use('/', userRoutes)
app.use('/blog', blogRoutes)

app.get('/api', (req, res) => {
    res.send('hello world')
})




// Serve any static files
app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});




const port = process.env.PORT || 5000
app.listen(port, () => console.log('Server Started on port ' + port))