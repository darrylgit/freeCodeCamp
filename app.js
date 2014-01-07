var domain = require('domain');
var express = require('express');
var fs = require('fs');
var flash = require('connect-flash');
var less = require('less-middleware');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var cluster = require('cluster');

// Load controllers
var homeController = require('./controllers/home');
var userController = require('./controllers/user');
var apiController = require('./controllers/api');
var contactController = require('./controllers/contact');

// App Configuration (API Keys, Database URI)
var secrets = require('./config/secrets');
var passportConf = require('./config/passport');

if (cluster.isMaster) {
  var numCPUs = require('os').cpus().length;

  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('disconnect', function(worker, code, signal) {
    console.error('worker ' + worker.process.pid + ' died');
    cluster.fork();
  });

} else {

  mongoose.connect(secrets.db);

// Initialize express application
  var app = express();

// Express Configuration
  app.set('port', process.env.PORT || 3000);
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.cookieParser());
  app.use(express.json());
  app.use(express.urlencoded());
  app.use(express.methodOverride());
  app.use(express.session({ secret: '0000' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(function(req, res, next) {
    res.locals.user = req.user;
    next();
  });
  app.use(flash());
  app.use(less({ src: __dirname + '/public', compress: true }));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(function(req, res) {
    res.status(404);
    res.render('404');
  });
  app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
  });

// Login/Signup Routes
  app.get('/', homeController.index);
  app.get('/login', userController.getLogin);
  app.post('/login', userController.postLogin);
  app.get('/logout', userController.logout);
  app.get('/signup', userController.getSignup);
  app.post('/signup', userController.postSignup);

  // Primary Routes
  app.get('/contact', contactController.getContact);
  app.post('/contact', contactController.postContact);
  app.get('/account', passportConf.isAuthenticated, userController.getAccount);
  app.post('/account/profile', passportConf.isAuthenticated, userController.postAccountProfileTab);
  app.post('/account/settings', passportConf.isAuthenticated, userController.postAccountSettingsTab);
  app.post('/account/delete', passportConf.isAuthenticated, userController.postDeleteAccount);
  app.get('/account/unlink/:provider', passportConf.isAuthenticated, userController.getOauthUnlink);
  app.get('/api', apiController.getApi);
  app.get('/api/foursquare', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.getFoursquare);
  app.get('/api/tumblr', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.getTumblr);
  app.get('/api/facebook', passportConf.isAuthenticated, apiController.getFacebook);
  app.get('/api/scraping', apiController.getScraping);
  app.get('/api/github', passportConf.isAuthenticated, passportConf.isAuthorized, apiController.getGithub);
  app.get('/api/lastfm', apiController.getLastfm);
  app.get('/api/nyt', apiController.getNewYorkTimes);
  app.get('/api/twitter', passportConf.isAuthenticated, apiController.getTwitter);
  app.get('/api/aviary', apiController.getAviary);

  // OAuth Routes
  app.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
  app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' }));
  app.get('/auth/github', passport.authenticate('github'));
  app.get('/auth/github/callback', passport.authenticate('github', { successRedirect: '/', failureRedirect: '/login' }));
  app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
  app.get('/auth/google/callback', passport.authenticate('google', { successRedirect: '/', failureRedirect: '/login' }));
  app.get('/auth/twitter', passport.authenticate('twitter'));
  app.get('/auth/twitter/callback', passport.authenticate('twitter', { successRedirect: '/', failureRedirect: '/login' }));
  app.get('/auth/foursquare', passport.authorize('foursquare'));
  app.get('/auth/foursquare/callback', passport.authorize('foursquare', { failureRedirect: '/api' }), function(req, res) { res.redirect('/api/foursquare'); });
  app.get('/auth/tumblr', passport.authorize('tumblr'));
  app.get('/auth/tumblr/callback', passport.authorize('tumblr', { failureRedirect: '/api' }), function(req, res) { res.redirect('/api/tumblr'); });

  app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
  });

}
