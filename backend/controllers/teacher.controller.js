const Teacher = require('../models/teacher.model');
const Student = require('../models/student.model');
const mongoose = require('mongoose');

module.exports.getTeacher = async function(req, res) {
  const { userId } = req.signedCookies;
  
  const teacher = await Teacher.find({user: userId});
  if (teacher.length) {
    res.render('view-teacher', {
      teacher: teacher[0],
      isTeacher: true
    });
  }
}

module.exports.getClass = async function(req, res) {
  const { userId } = req.signedCookies;
  
  const teacher = await Teacher.find({user: userId});
  const students = await Student.find({classes: teacher[0].classes})

  res.render('class', {
    students: students,
    isTeacher: true
  })
  
}

module.exports.getStudentProfile = async function(req, res) {
  const { id } = req.params;
  
  const students = await Student.find({_id : id})

  res.render('view-student', {
    student: students[0],
    isTeacher: true
  })
  
}

module.exports.getEditScore = async function(req, res) {
  const { userId } = req.signedCookies;
  
  const teacher = await Teacher.find({user: userId});
  const students = await Student.find({classes: teacher[0].classes})

  res.render('edit-score', {
    students: students,
    isTeacher: true
  })
  
}

module.exports.postEditScore = async function(req, res, next) {
  const scores = req.body;

  const length = scores.math.length;

  for (let i = 0; i < length; ++i) {
    const res = await Student.updateMany(
      { user: scores.user_id[i] },
      { "mark.math": parseFloat(scores.math[i]), 
        "mark.literature": parseFloat(scores.literature[i]), 
        "mark.english": parseFloat(scores.english[i]) 
      },
    );
    res.n;
  }

  next();
}

module.exports.getTeacherList = async function(req, res) {
  const teachers = await Teacher.find();

  res.render('teacher-list', {
    teachers: teachers,
    isTeacher: true
  })
  
}

module.exports.getTeacherWithId = async function(req, res) {
  const { id } = req.params;
  
  const teachers = await Teacher.find({_id : mongoose.Types.ObjectId(id)})

  res.render('view-teacher', {
    teacher: teachers[0],
    isTeacher: true
  })
  
}