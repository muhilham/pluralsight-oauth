'use strict';


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
  clientID: '246344478881-dsor2e7p6kn6d90pk4iamktkt8o0bo85.apps.googleusercontent.com',
  clientSecret: 'OuHLRai-QNi1_1Hv7BnKpvc0',
  callbackURL: 'http://localhost:3013/auth/google/call'
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

module.exports = {
  config: googleConfig,
  callback: getFromGoogle
};