const express = require('express');
const router = express.Router();
const authCtrl = require('../Controllers/authCtrl');
const limiter = require('../Middleware/limiter');
const passwordValidator = require('../Middleware/passwordValidator');
const emailValidator = require('../Middleware/emailValidator')

// Routes

router.post('/signup', limiter, emailValidator, passwordValidator, authCtrl.signup);
router.post('/login', limiter, authCtrl.login);

module.exports = router;