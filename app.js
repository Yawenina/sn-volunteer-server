const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const expressValidation = require('express-validator')

const errorHandler = require('./handlers/errorHandlers')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// serve static files
app.use(express.static(path.resolve(__dirname, 'public')))

// parse request body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// validate user input
app.use(expressValidation())

// handle routes
app.get('*', (req, res) => {
  res.send('Hello Express!')
})

// handle errors
if (app.get('env') === 'development') {
  app.use(errorHandler.developmentErrors)
}

app.use(errorHandler.productionErrors)

module.exports = app
