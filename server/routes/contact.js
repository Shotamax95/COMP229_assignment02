let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
const { route } = require('.');

// connect to oue Book Model
let Contact = require('../models/contact');

//  Get Route for the Contact List page - READ Operation
router.get('/', (req, res, next) =>{
    Contact.find((err, contactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(ContactList);
            res.render('contact/list', {title: 'Contact List', ContactList: contactList})
        }
    });
});


// Get Route for displaying Add page --Create Operation
router.get('/add', (req, res, next) => {
    res.render('contact/add', {title: 'Add Contact'})
});

// Post Route for processing Add page --Create Operation
router.post('/add', (req, res, next) => {
    let newContact = Contact ({
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "email": req.body.email
    });

    Contact.create(newContact, (err, Contact) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contact-list');
        }
    });
});

// Get Route for displaying Edit page --Update Operation
router.get('/edit/:id', (req, res, next) => {
    let id =  req.params.id;

    Contact.findById(id, (err, contactToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the edit view
            res.render('contact/edit', {title: 'Edit Contact', contact: contactToEdit});
        }
    });
});

// Post Route for processing Edit page --Update Operation
router.post('/edit/:id', (req, res, next) => {
    let id = req.params.id;

    let updateContact = Contact({
        "_id": id,
        "contactName": req.body.contactName,
        "contactNumber": req.body.contactNumber,
        "email": req.body.email
    });

    Contact.updateOne({_id: id}, updateContact, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contact-list');            
        }
    });
});

// Get to perform Contact deletion --Delete Operation
router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;

    Contact.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the contact list
            res.redirect('/contact-list');            
        }

    });
});


module.exports = router;