const express = require('express');
const { buyProduct } = require('../controllers/productController');

const prouductRoute = express.Router()

prouductRoute.post('/buyProduct',buyProduct)


module.exports =prouductRoute 