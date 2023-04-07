const express = require('express')
const router = express.Router()
const URL = require('../../models/URL')
const shortenURL = require('../../utilities/generator_letters')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
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
    .catch(error => {
      console.log(error)
      res.render('error')
    })
})

router.get('/:shortURL', (req, res) => {
  const shortUrl = req.params.shortURL
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

module.exports = router