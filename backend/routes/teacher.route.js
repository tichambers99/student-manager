var express = require('express');

var router = express.Router();

var controller = require('../controllers/teacher.controller');

router.get('/', controller.getTeacher);
router.get('/view/:id', controller.getTeacherWithId);
router.get('/edit-score', controller.getEditScore);
router.post('/edit-score', controller.postEditScore, controller.getEditScore);
router.get('/class', controller.getClass);
router.get('/student-profile/:id', controller.getStudentProfile);
router.get('/list', controller.getTeacherList);


module.exports = router;