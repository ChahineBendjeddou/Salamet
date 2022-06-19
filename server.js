if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

typeof (process.env.CLOUDINAY_KEY)
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const DataBase = require('./database')
const session = require('express-session')
const { corsOptions } = require('./middleware')
const passport = require('passport')
const User = require('./models/user')
const LocalStrategy = require('passport-local')
const MongoDBStore = require('connect-mongo')
const expressStaticGzip = require('express-static-gzip')

const secret = process.env.SECRET || 'thisshouldbeabettersecret!'

const store = MongoDBStore.create({
    mongoUrl: process.env.DB_URL || 'mongodb://localhost:27017/salamet',
    secret,
    touchAfter: 24 * 60 * 60
})

store.on("error", function (e) {
    console.log("SESSION STORE ERROR", e)
})

const sessionConfig = {
    store,
    name: 'session',
    secret,
    resave: false,//don't save session if unmodified
    saveUninitialized: true,// don't create session until something stored
    cookie: {
        httpOnly: true,
        // secure: true, //it needs HTTPS to work other wise the cookie wont be stored 
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig))
app.use(cors(corsOptions))
app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({ extended: true }))
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())



const userRoutes = require('./routes/users')
const blogRoutes = require('./routes/blogs')
const reportAccidentRoutes = require('./routes/reportAccident')

app.use('/', userRoutes)
app.use('/', blogRoutes)
app.use('/report', reportAccidentRoutes)

app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})

// app.use('/', expressStaticGzip('client/build', {
//     index: false,
//     enableBrotli: true,
//     orderPreference: ['br']
// }));

// app.get('*', expressStaticGzip(path.join(__dirname, 'client/build'), {
//     enableBrotli: true
// }))

// app.get('*', (req, res) => {
//     res.redirect('/')
// })


app.use(express.static(path.join(__dirname, 'client/build')));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const port = process.env.PORT || 5000
app.listen(port, () => console.log('Server Started on port ' + port))