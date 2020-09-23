const User = require('../models/user.model');

module.exports.requireAuth = async function(req, res, next) {
  const { userId } = req.signedCookies;
	if (!userId) {
		res.redirect('/');
		return;
	}

  const user = await User.find({ _id: userId});
	
	if (!user.length) {
		res.redirect('/');
		return;
	}

	next();
}