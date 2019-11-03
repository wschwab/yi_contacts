var express = require('express')
var router = express.Router()
const contacts = require('./contacts')

router.get('/', function (req, res) {
  res.send('hello world')
})


module.exports = function (app) {
    app.use('/contacts', contacts)
}
