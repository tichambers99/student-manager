const Student = require('../models/student.model');

module.exports.getStudent = async function(req, res) {
  const { userId } = req.signedCookies;
  
  const students = await Student.find({user: userId});
  if (students.length) {
    res.render('student-views-student', {
      student: students[0],
      isTeacher: false
    });
  }
}