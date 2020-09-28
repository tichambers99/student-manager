var express = require('express');

var router = express.Router();

var controller = require('../controllers/student.controller');

router.get('/', controller.getStudent);
router.get('/class', controller.getClass);
router.get('/student-profile/:id', controller.getStudentProfile);
router.get('/stuSearchStu', controller.stuSearchStu);
router.get('/list', controller.getTeacherList);

module.exports = router;