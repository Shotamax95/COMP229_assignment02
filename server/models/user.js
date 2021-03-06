/*
File: contact.ejs
Name: Shota Ito
Student#: 301103095
Date: Oct 22nd 2020
 */

// require modules for the User model
let mongoose =require('mongoose');
let passportLocalMongoose = require('passport-local-mongoose');

let User = mongoose.Schema
(
    {
        username: 
        {
            type: String,
            default: '',
            trim: true,
            required: 'username is required'
        },
        /*
        password:
        {
            type: String,
            defailt: '',
            trim: true,
            required: 'password is reuired'
        }
        */
       email:
       {
           type: String,
           default: '',
           trim: true,
           required: 'email address is required'
       },
       displayName:
       {
           type: String,
           default: '',
           trim: true,
           required: 'Display name is required'
       },
       created:
       {
           type: Date,
           default: Date.now,
       },
       update:
       {
           type: Date,
           default: Date.now,
       }
        
    },
    {
        collection: "users"
    }
);

// configure  options for User Model
let options = ({ missingPasswordError: 'Wrong / Missing Password'});

User.plugin(passportLocalMongoose, options);

module.exports.User = mongoose.model('User', User);