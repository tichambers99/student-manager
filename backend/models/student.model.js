const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  dateOfBirth: String,
  address: String,
  classes: String,
  mark: {
    math: {type: Number},
    literature: {type: Number},
    english: {type: Number}
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Student = mongoose.model('Student', studentSchema, 'student');

module.exports = Student;