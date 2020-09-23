const Student = require('../models/student.model');

module.exports.getStudent = async function(req, res) {
  // const student = await Student.find({email: email});
  // res.render('/', student[0]);
  const { email } = req.query;
  
  const student = await Student.find({email: email});
  if (student.length) {
    console.log(student[0])
    res.render('student-views-student', {
      student: student[0]
    });
  }
}