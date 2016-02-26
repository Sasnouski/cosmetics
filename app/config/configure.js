
//var express = require('express'),
//    errorhandler = require('errorhandler'),
//    //routes  = require('./routes'),
//    http    = require('http'),
//    path    = require('path');
//
//module.exports = function(db) {
//  var app = express();
//
//  app.engine('html', require('ejs').renderFile);
//  app.set('port', process.env.PORT || 3000);
//  app.set('views', __dirname + '/views');
//  app.set('view engine', 'html');
//  app.use(express.static(path.join(__dirname, 'public')));
//  if (app.get('env') === 'development') {
//    app.use(errorhandler());
//  }
//  return app;
//}

var path = require('path'),
  routes = require('./routes'),
  express = require('express'),
  bodyParser = require('body-parser'),
  morgan = require('morgan'),
  methodOverride = require('method-override'),
  errorHandler = require('errorhandler');

module.exports = function(app) {
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');
  app.use(morgan('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(methodOverride());
  routes.initialize(app, new express.Router());
  app.use('/public/', express.static(path.join(__dirname, '../public')));
  if ('development' === app.get('env')) {
    app.use(errorHandler());
  }
  return app;
};

