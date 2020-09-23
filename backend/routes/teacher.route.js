var express = require('express');

var router = express.Router();

var controller = require('../controllers/teacher.controller');

router.get('/', controller.getTeacher);
router.get('/class', controller.getClass);

module.exports = router;