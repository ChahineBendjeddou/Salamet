const express = require('express')
const path = require('path');




const app = express()
const PORT = process.env.PORT || 3001
app.get('/', (req, res, next) => {
    options = {
        root: path.join(__dirname)
    }
    res.sendFile('home.html', options)
})
app.listen(PORT, () => console.log(`Serving on PORT ${PORT}`))
