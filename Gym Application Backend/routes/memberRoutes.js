const express = require('express');
const { createMember } = require('../controllers/memberController');

const membershipRoute = express.Router();



membershipRoute.post('/createMember',createMember)

module.exports = {membershipRoute}