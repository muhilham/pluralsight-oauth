var express = require('express');
var passport = require('passport');
var path = require('path');
var router = express.Router();
var googleCreds = require('../credentials/google.com.json').web;

var googleRedirect = googleCreds.redirect_uris[0].split(process.env.PORT + '/auth')[1];

var redirectParam = {
  successRedirect: '/users/',
  failureRedirect: '/login/'
};

// This is tells google what our app actually wants
// This is specific to google strategy
var signinParam = {
  scope: [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email'
  ]
};

router
  .route(googleRedirect)
  .get(passportGoogle(redirectParam));

// Sign In With Google
router
  .route('/google')
  .get(passportGoogle(signinParam));

function passportGoogle(param) {
  return passport.authenticate('google', param)
}

module.exports = router;
