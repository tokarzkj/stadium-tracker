var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var uuidv5 = require('uuid/v5');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);
var redis = require('redis');
require('dotenv').config();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var stadiumRouter = require('./routes/stadium');

var app = express();
const client = redis.createClient();

app.use(session({
  genid: function(req) {
    return uuidv5('localhost:3000', uuidv5.URL);
  },
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: new RedisStore({
    client: client,
    ttl: 260
  })
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/stadium', stadiumRouter);

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
