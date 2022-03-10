const express = require('express');
const routes = require('./routes');
const PORT = process.env.PORT || 3000;
const db = require('./db');
const logger = require('morgan')
const app = express() 

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(logger('dev'))
app.use('/', routes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => {
    console.log(`Express server listening on port ${PORT}`)

})