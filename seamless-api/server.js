const express = require('express')
const cors = require('cors')
const search = require('./search')
const app = express()

app.use(cors()).get('/', function (req, res) {
  search(req.query.companies, (err,results) => {
    // Responds with content-type application/json
    res.json(results)
  })
})

app.listen(3001)