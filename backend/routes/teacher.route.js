var express = require('express');

var router = express.Router();

var controller = require('../controllers/teacher.controller');

router.get('/', controller.getTeacher);
router.get('/view/:id', controller.getTeacherWithId);
router.get('/edit-score', controller.getEditScore);
router.get('/add-student', controller.getAddStudent);
router.post('/add-student', controller.postAddStudent);
router.post('/edit-score', controller.postEditScore, controller.getEditScore);
router.get('/class', controller.getClass);
router.get('/student-profile/:id', controller.getStudentProfile);
router.post('/edit-infor', controller.postEditInfor, controller.getClass);
router.get('/list', controller.getTeacherList);
router.get('/teaSearchStu', controller.teaSearchStu);
router.get('/searchTeacher', controller.searchTeacher);


module.exports = router;