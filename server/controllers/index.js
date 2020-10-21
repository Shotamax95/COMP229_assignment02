let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('content/about', { title: 'About' });
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('content/projects', { title: 'Projects' });
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('content/services', { title: 'Services' });
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact' });
}
