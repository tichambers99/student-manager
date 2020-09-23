var express = require('express');

var router = express.Router();

var controller = require('../controllers/student.controller');

router.get('/', controller.getStudent);

module.exports = router;