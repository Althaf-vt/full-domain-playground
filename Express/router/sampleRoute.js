const express = require('express');
const { renderHome, verifyUser } = require('../controller/sampleController');
const { authMiddleware } = require('../controller/auth');
const router = express.Router();

router.get('/',renderHome);
router.get('/lol',authMiddleware,verifyUser);

module.exports = {router}