const express = require('express');
const contactUs = require('../controllers/contactusController');
const contactRoute = express.Router();


contactRoute.post('/contactUs',contactUs)


module.exports = contactRoute;