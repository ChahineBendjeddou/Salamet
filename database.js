const mongoose = require('mongoose')
require('dotenv').config();
const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/salamet'


class Database {

    constructor() {
        this.connect()
    }
    connect() {
        mongoose.connect(dbUrl)
            .then(() => console.log('DataBase connection successful'))
            .catch(err => console.log('Error connecting to database ' + err.message))
    }
}

module.exports = new Database()