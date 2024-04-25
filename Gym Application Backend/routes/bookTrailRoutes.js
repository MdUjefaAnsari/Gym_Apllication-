const express = require('express');
const bookTrail = require('../controllers/bookTrailController');


const bookTrailRoute = express.Router();



bookTrailRoute.post('/bookTrail',bookTrail);



module.exports={bookTrailRoute}