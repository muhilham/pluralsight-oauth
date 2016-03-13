var passport = require('passport');
var facebook = require('passport-facebook');
var FacebookStrategy = facebook.Strategy;

function facebookPassportStrategies() {
  var facebookConfig = {
    clientID: '938129789636416',
    clientSecret: '9cba4ae8c4e4920420ba33ca9f58e088',
    callbackURL: 'http://localhost:3013/auth/facebook/callback',
    passReqToCallback: true
  };

  function getFromFacebook(req, accessToken, refreshToken, profile, done) {
    var user = {
      // email: profile.emails[0].value,
      // image: profile.photos[0].value,
      displayName: profile.displayName,
      facebook: {
        id: profile.id,
        token: accessToken
      }
    };
    // console.log(profile);
    return done(null, user);
  }

  return passport.use(new FacebookStrategy(facebookConfig, getFromFacebook));
}

module.exports = facebookPassportStrategies;


