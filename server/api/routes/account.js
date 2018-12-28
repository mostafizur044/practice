const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account');

router.post('/', accountController.save);

router.get('/',  accountController.get);

module.exports = router;