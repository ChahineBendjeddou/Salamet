const mongoose = require('mongoose')
if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}
// const dbUrl = process.env.DB_URL || 'mongodb://localhost:27017/salamet'
const dbUrl = 'mongodb+srv://chahine:chahine301299@cluster0.a969s.mongodb.net/salamet?retryWrites=true&w=majority'

console.log(dbUrl)
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