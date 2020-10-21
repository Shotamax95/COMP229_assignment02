let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { route } = require('.');

// connect to oue Book Model
let Contact = require('../models/contact');

let contactController = require('../controllers/contact')

//  Get Route for the Contact List page - READ Operation
router.get('/', contactController.displayContactList);


// Get Route for displaying Add page --Create Operation
router.get('/add', contactController.displayAddPage);

// Post Route for processing Add page --Create Operation
router.post('/add', contactController.processAddPage);

// Get Route for displaying Edit page --Update Operation
router.get('/edit/:id', contactController.displayEditPage);

// Post Route for processing Edit page --Update Operation
router.post('/edit/:id', contactController.processEditPage);

// Get to perform Contact deletion --Delete Operation
router.get('/delete/:id', contactController.performDeletePage);


module.exports = router;