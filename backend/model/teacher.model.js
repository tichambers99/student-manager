const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: String,
  email: String ,
  dateOfBirth: Date,
  address: String,
  phoneNumber: String,
  facebookLink: String,
  class: String
});

const Teacher = mongoose.model('Teacher', teacherSchema, 'teacher');

module.exports = Teacher;