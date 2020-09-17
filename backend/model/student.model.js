const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  dateOfBirth: Date,
  adrress: String,
  mark: {
    math: {type: Number},
    literature: {type: Number},
    english: {type: Number}
  }
});

const Student = mongoose.model('Student', studentSchema, 'student');

module.exports = Student;