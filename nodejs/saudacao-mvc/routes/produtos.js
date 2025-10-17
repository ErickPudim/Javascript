var express = require('express');
var router = express.Router();
const siteController = require('../controllers/siteController');

router.get('/', siteController.produtos);
router.get('/camisetas', siteController.camisetas);

module.exports = router;
