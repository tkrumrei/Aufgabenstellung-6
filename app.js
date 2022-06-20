var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

<<<<<<< HEAD
//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var homeRouter = require('./routes/home');
var searchRouter = require('./routes/search');
var addRouter = require('./routes/add');
=======
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
>>>>>>> 7ab812c00b7c1c526d1f5d7e7fd74f0ef08b2cfa

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

<<<<<<< HEAD
//app.use('/', indexRouter);
//app.use('/users', usersRouter);


// adding my custom routes
app.use('/', homeRouter);
app.use('/home', homeRouter);
app.use('/search', searchRouter);
app.use('/add', addRouter);



=======
// routes are defined here
app.use('/', indexRouter);
app.use('/users', usersRouter);
>>>>>>> 7ab812c00b7c1c526d1f5d7e7fd74f0ef08b2cfa

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
