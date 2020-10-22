let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let passport = require('passport');

// connect to oue Book Model
let Contact = require('../models/contact');

let contactController = require('../controllers/contact');

// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}


//  Get Route for the Contact List page - READ Operation
router.get('/', contactController.displayContactList);

// Get Route for displaying Add page --Create Operation
router.get('/add', requireAuth,contactController.displayAddPage);

// Post Route for processing Add page --Create Operation
router.post('/add', requireAuth, contactController.processAddPage);

// Get Route for displaying Edit page --Update Operation
router.get('/edit/:id', requireAuth, contactController.displayEditPage);

// Post Route for processing Edit page --Update Operation
router.post('/edit/:id', requireAuth, contactController.processEditPage);

// Get to perform Contact deletion --Delete Operation
router.get('/delete/:id', requireAuth, contactController.performDeletePage);


module.exports = router;