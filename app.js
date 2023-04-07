const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = 3000
const shortURL = require('./utilities/generator_letters')

//mongoose
const mongoose = require('mongoose')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

//views engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//routes
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/:shortURL', (req, res) => {
  const { shortUrl } = req.params
})

app.listen(PORT, () => {
  console.log(`Express is listening on http://localhost:${PORT}`)
})