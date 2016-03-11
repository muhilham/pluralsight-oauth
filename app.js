var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var google = require('passport-google-oauth');
var GoogleStrategy = google.OAuth2Strategy;
var session = require('express-session');

var routes = {
  index: require('./routes/index'),
  users: require('./routes/users')
};

var config = {
  google: require('./config/google'),
  session: require('./config/express-session')
};

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(config.session.config));
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

/**
 * In order to use the strategy we have to plugged it into the passport
 */
passport.use(new GoogleStrategy(config.google.config, config.google.callback));

app.use('/', routes.index);
app.use('/users', routes.users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

function serializeUser(user, done) {
  return done(null, user);
}

function deserializeUser(user, done) {
  return done(null, user);
}

module.exports = app;
