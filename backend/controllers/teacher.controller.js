const Teacher = require('../models/teacher.model');
const Student = require('../models/student.model');


module.exports.getTeacher = async function(req, res) {
  const { userId } = req.signedCookies;
  
  const teacher = await Teacher.find({user: userId});
  if (teacher.length) {
    res.render('view-teacher', {
      teacher: teacher[0]
    });
  }
}

module.exports.getClass = async function(req, res) {
  const { userId } = req.signedCookies;
  
  const teacher = await Teacher.find({user: userId});
  const students = await Student.find({classes: teacher[0].classes})

  res.render('teacher-list', {
    students: students
  })
  
}
