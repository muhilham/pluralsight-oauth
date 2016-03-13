var passport = require('passport');
function PassportApp(app) {
  app.use(passport.initialize());
  app.use(passport.session());

  /**
   * place a user object into the session
   * you can imagine you might wanna keep that small,
   * you dont wanna put your whole user into the session
   * it takes a function, and it will pass you the whole user object
   * and a callback function that will call when we're ready to go
   */
  passport.serializeUser(serializeUser);

  /**
   * the opposite piece of serializeuser
   * pull a user back out the session
   */
  passport.deserializeUser(deserializeUser);

  require('./strategies/google')();
  require('./strategies/twitter')();
  require('./strategies/facebook')();

  function serializeUser(user, done) {
    return done(null, user);
  }

  function deserializeUser(user, done) {
    return done(null, user);
  }
}

module.exports = PassportApp;