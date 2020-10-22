/*
File: index.js
Name: Shota Ito
Student#: 301103095
Date: Oct 22nd 2020
*/

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');


/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/* GET about page. */
router.get('/about', indexController.displayAboutPage);

/* GET projects page. */
router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
router.get('/services', indexController.displayServicesPage);

/* GET contact page. */
router.get('/contact', indexController.displayContactPage);


// Get Route for displaying Login page
router.get('/login', indexController.displayLoginPage);

// Post Route for processing Login page
router.post('/login', indexController.processLoginPage);

// Get Route for displaying register page
router.get('/register', indexController.displayRegisterPage);

// Post Route for processing Register page
router.post('/register', indexController.processRegisterPage);

// Get to perform User Logout deletion
router.get('/logout', indexController.performLogout);




module.exports = router;
