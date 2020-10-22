/*
File: contact.ejs
Name: Shota Ito
Student#: 301103095
Date: Oct 22nd 2020
 */

let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    contactName: String,
    contactNumber: Number,
    email: String
},
{
    collection: "contacts"
});

module.exports = mongoose.model('Contact', contactModel);