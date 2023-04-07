const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const PORT = 3000
const URL = require('./models/URL')
const shortenURL = require('./utilities/generator_letters')
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
//body-parser
app.use(express.urlencoded({ extended: true }))
//routes
app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const originURL = req.body.originURL
  const shortURL = shortenURL(5)
  URL.findOne({ originURL })
    .lean()
    .then((data) => {
      if (!data) {
        URL.create({ originURL, shortURL })
          .then((data) => {
            res.render('success', { origin: req.headers.origin, url: data.shortURL })
          })
          .catch(error => console.log(error))
      } else {
        res.render('success', { origin: req.headers.origin, url: data.shortURL })
      }
    })
    .catch(error => console.log(error))
})

app.get('/:shortURL', (req, res) => {
  const  shortUrl = req.params.shortURL
  URL.findOne({ shortURL: shortUrl })
    .lean()
    .then((data) => {
      if (!data) {
        return res.render('error')
      }
      res.redirect(data.originURL)
    })
    .catch((error) => console.log(error))
})


app.listen(PORT, () => {
  console.log(`Express is listening on http://localhost:${PORT}`)
})