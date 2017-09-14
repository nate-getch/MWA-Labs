var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
//var randomstring = require("randomstring");
var cookieSession = require('cookie-session');
var validator = require('express-validator');
var csrf = require('csurf');

var index = require('./routes/index');
var newsletter = require('./routes/newsletter');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('trust proxy', 1);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(validator());
app.use(cookieSession({
                    name: 'session',
                    secret: "nati",//randomstring.generate()
                    httpOnly: true,
                    maxAge: 30 * 60 * 1000,
                    secure: false,
                    overwrite: false,
              }));
app.use(csrf({ cookie: true }));

app.use('/', index);
app.use('/newsletter', newsletter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(5000, () => console.log("Listening to port 5000"));
module.exports = app;
