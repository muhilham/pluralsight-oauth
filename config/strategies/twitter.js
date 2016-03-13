var passport = require('passport');
var twitter = require('passport-twitter');
var TwitterStrategy = twitter.Strategy;

function twitterPassportStrategies() {
  var twitterConfig = {
    consumerKey: 'Oi8dgymhGGrNplxjm92fAq86o',
    consumerSecret: 'UulKzOuSPEuqEQwVJsyC1cQ9R1Ul9nM8C8vJbtwFhpiCPJkhYt',
    callbackURL: "http://localhost:3013/auth/twitter/callback",
    passReqToCallback: true
  };

  function getFromTwitter(req, token, tokenSecret, profile, done) {
    var user = {
      image: profile.photos[0].value,
      displayName: profile.displayName,
      twitter: {
        id: profile.id,
        token: token
      }
    };
    return done(null, user);
  }

  return passport.use(new TwitterStrategy(twitterConfig, getFromTwitter));
}

module.exports = twitterPassportStrategies;

