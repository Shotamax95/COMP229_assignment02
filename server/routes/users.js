/*
File: contact.ejs
Name: Shota Ito
Student#: 301103095
Date: Oct 22nd 2020
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
