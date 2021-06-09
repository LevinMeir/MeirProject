const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
//const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const authRoutes = require('./routes/auth')
const app = express()

mongoose.connect('mongodb+srv://Meir:10203040@cluster1.qjzms.mongodb.net/Meirproject?retryWrites=true&w=majority')
.then(()=>console.log('MongoDB connected'))
.catch(error=>console.log(error))

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('morgan')('dev'))
app.use('/uploads', express.static('uploads'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(require('cors')())

app.use('/api/auth', authRoutes)

module.exports = app
