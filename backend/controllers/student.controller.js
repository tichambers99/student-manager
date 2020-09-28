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

module.exports.getClass = async function(req, res) {
  const { userId } = req.signedCookies;
  
  const student = await Student.find({user: userId});
  const students = await Student.find({classes: student[0].classes})

  res.render('class', {
    students: students,
    isStudent: true
  })
  
}

module.exports.getStudentProfile = async function(req, res) {
  const { id } = req.params;
  const students = await Student.find({_id : id})

    res.render('view-student', {
      student: students[0],
      isStudent: true
    })

}

module.exports.stuSearchStu = async function(req, res) {
  var q = req.query.q;
  const { userId } = req.signedCookies;
  console.log(q.q);
  const student = await Student.find({user: userId});
  const students = await Student.find({
    classes: student[0].classes,
    name: q
  })

  res.render('class', {
    students: students,
    isStudent: true
  })
  
}

module.exports.getTeacherList = async function(req, res) {
  const teachers = await Teacher.find();

  res.render('teacher-list', {
    teachers: teachers,
    isStudent: true
  })
  
}
