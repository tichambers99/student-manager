const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: String,
  email: String ,
  dateOfBirth: String,
  address: String,
  phoneNumber: String,
  facebookLink: String,
  classes: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const Teacher = mongoose.model('Teacher', teacherSchema, 'teacher');

module.exports = Teacher;