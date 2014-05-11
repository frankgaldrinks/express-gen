module.exports = function (app) {
  var indexCon = require('../controllers/index');
  var userCon = require('../controllers/user');

  //index routes
  app.get('/', indexCon.index)

  //user routes
  app.get('/account', ensureAuthenticated, userCon.read);
  app.get('/signup', ifAuthenticated, userCon.new);
  app.post('/signup',ifAuthenticated, userCon.create);
  app.get('/login', ifAuthenticated, userCon.login);
  app.post('/login', ifAuthenticated, userCon.postlogin);
  app.get('/account/settings',ensureAuthenticated, userCon.edit);
  app.put('/account/edit',ensureAuthenticated, userCon.update);
  app.get('/logout', userCon.logout);
};