var express = require('express')
var bodyParser = require('body-parser')
require('dotenv').config()

var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : false}))

var twatt = require('./routes/twatt')

app.use('/api/twatt',twatt)

app.listen(3000, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Listening on port 3000");
  }
})
