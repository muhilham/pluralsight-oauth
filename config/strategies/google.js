'use strict';

function googlePassportStrategies() {
  var passport = require('passport');
  var google = require('passport-google-oauth');
  var GoogleStrategy = google.OAuth2Strategy;

  // Download Your credential JSON File from google developer console
  // Create and store it into credentials directory
  var credentials = require('../../credentials/google.com.json').web;

  /**
   * [googleConfig description]
   * @type {Object}
   * clientId &  clientSecret
   * - These are token that will setup over on the developer console to let google who we are as an application,
   * - so these will identify the application itself that will then allow user to authenticated gets
   * callbackURL
   * - google going to send the user back to once their done authenticated
   */
  var googleConfig = {
    clientID: credentials.client_id,
    clientSecret: credentials.client_secret,
    callbackURL: credentials.redirect_uris[0]
  };

  /**
   * [getFromGoogle]
   * - what's going to be called when google sent something back to that callback url
   * @param  {Object}   req          [what we're gonna use to go and get data from google later on]
   * @param  {String}   accessToken  [what we're gonna use to go and get data from google later on]
   * @param  {String}   refreshToken [what we're gonna use to go and get data from google later on]
   * @param  {Object}   profile      [Our use data]
   * @param  {Function} done         [callback that were gonna call when were done doing whatever we're gonna do with all these information]
   */
  function getFromGoogle(req, accessToken, refreshToken, profile, done) {
    return done(null, profile);
  }

  /**
   * In order to use the strategy we have to plugged it into the passport
   */
  passport.use(new GoogleStrategy(googleConfig, getFromGoogle));
}

module.exports = googlePassportStrategies;