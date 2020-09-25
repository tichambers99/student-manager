var express = require('express');

var router = express.Router();

var controller = require('../controllers/auth.controller');

router.post('/', controller.postLogin);
router.get('/logout', controller.getLogout);

module.exports = router;