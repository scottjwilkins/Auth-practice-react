const User = require('../models/user')

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;
  // See if user with the given email exists

if(!email || !password) {
  return res.status(422).send({ error: 'You must provide email and password' });
}

User.findOne({ email: email }, function(err, existingUser) {
  if (err) { return next(err) }

  // if a user does not exist, create and save
  if (existingUser) {
    return res.status(422).send({ error: 'email is in use' })
  }
  const user = new User({
    email: email,
    password: password
  });

  user.save(function(err) {
    if (err) { return next(err) }

    res.json({ success: true })
  });
  // respond indicating user was created
});

}
