const User = require('../models/user.model');
const url = require('url');

module.exports.postLogin = async function(req, res) {
  const { email, password } = req.body;

	const user = await User.find({email: email});
	if (!user.length) {
		res.render('login', {
			errors: [
				'User does not exist'
			],
			values: req.body
		});
		return;
	}

	if (user[0].password !== password) {
		res.render('login', {
			errors: [
				'Wrong password'
			],
			values: req.body
		});
		return;
	}

	res.cookie('userId', user[0]._id, {
		signed: true
	});

  user[0].isTeacher ? 
    res.redirect('/teacher')
   : 
    res.redirect('/student')
}

module.exports.getLogout = function(req, res) {
	res.clearCookie('userId', {
		signed: false
	});

	res.redirect('/');
}
