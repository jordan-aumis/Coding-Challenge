const express = require('express')
const app = express()
const port = 3000 || 3050
const bodyParser = require('body-parser')
const cors = require('cors');

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded(
    {
        extended: true
    }
))

const movies = require('./routes/movies')
const series = require('./routes/series')

app.use('/movies', movies)
app.use('/series', series)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})