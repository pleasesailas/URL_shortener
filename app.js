const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const app = express()
const PORT = 3000

//mongoose
require('./config/mongoose')
//views engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
//body-parser
app.use(express.urlencoded({ extended: true }))
//routes
app.use(routes)

app.listen(PORT, () => {
  console.log(`Express is listening on http://localhost:${PORT}`)
})