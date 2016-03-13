var express = require('express');
var router = express.Router();


router.use('/', loggedInPrevent);
/* GET users listing. */
router.get('/', loggedIn);

/**
 * [loggedIn description]
 * @param  {Object}   req
 * - When you are sign in passport will automatically add user object to 'req' object
 * @param  {Object}   res  [description]
 * @param  {Function} next [description]
 */
function loggedIn(req, res, next) {
  var userData = req.user;
  var userRendered = {
    name: userData.displayName,
    image: userData.image
  };
  return res.render('users', userRendered);
}

function loggedInPrevent(req, res, next) {
  if (!req.user) {
    return res.redirect('/');
  }

  return next();
}
module.exports = router;
