const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express()
const port = 6002

const authRouter = require('./routes/auth')
const userRouter = require('./routes/user')
const restaurantRouter = require("./routes/restaurant");

dotenv.config()

const admin = require('firebase-admin');
const serviceAccount = require('./servicesAccountKey.json')

mongoose.connect(process.env.MONGO_URL).then(() => console.log('DB connected')).catch((err) => console.log(err))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/', authRouter)
app.use('/api/users', userRouter)
app.use('/api/restaurants', restaurantRouter)



app.listen(process.env.PORT || port, () => console.log(`Example app listening on port ${process.env.PORT}! `))