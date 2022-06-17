const express = require('express');
const router = express.Router();
const multer = require('../Middleware/multer-config');
const auth = require('../Middleware/auth');
const sauceCtrl = require('../Controllers/saucesCtrl');


router.post('/', auth, multer, sauceCtrl.createSauce);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.get('/', auth, sauceCtrl.getAllSauce);
router.put('/:id', auth, multer, sauceCtrl.modifySauce);
router.delete('/:id', auth, sauceCtrl.deleteSauce);

module.exports = router;