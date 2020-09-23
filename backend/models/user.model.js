const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String ,
  password: String,
  isTeacher: Boolean
});

const User = mongoose.model('User', userSchema, 'user');

module.exports = User;