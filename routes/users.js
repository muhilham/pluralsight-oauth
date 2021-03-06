var express = require('express');
var router = express.Router();

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
  if (!req.user) {
    return res.redirect('/');
  }
  var userData = req.user._json;
  var userRendered = {
    name: userData.displayName,
    image: userData.image.url
  };
  return res.render('users', userRendered);
}
module.exports = router;
