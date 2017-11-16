const mongoose = require('mongoose')

// import environmental variables from our variables.env file
require('dotenv').config({ path: './variables.env' })

// connect mongoose
mongoose.connect(process.env.DATABASE, {
  useMongoClient: true
})
mongoose.Promise = global.Promise
mongoose.connection.on('error', (err) => {
  console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`)
})

// start our app!
const app = require('./server/app.js')

app.set('port', process.env.port || 3000)
const server = app.listen(app.get('port'), () => {
  console.log(`Express running  => port ${server.address().port}`)
})
