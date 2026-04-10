const express = require('express')
const mongoose = require('mongoose');
require('dotenv').config();
const app = express()
const port = 5000
const subscribersRouter = require('./routes/subscribers'); //routes for subscribers


// connection db
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (err) => console.error(err))
db.once('open', () => console.log('Connected to Database'))



//using middleWare
app.use(express.json())
app.use('/subscribers', subscribersRouter)


app.listen(port, () => console.log(`app listening on port ${port}!`))