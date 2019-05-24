var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
// import connectHistoryApiFallback from 'connect-history-api-fallback' ;
var proxy = require( 'http-proxy-middleware');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var merberRouter = require('./routes/merbers') ;


var app = express();

var mongoose = require('mongoose') ;
var Member = require('./Modal/Member');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app.use('/',Express.static(path.join(__dirname,"..",'build')));
// app.use('/', connectHistoryApiFallback());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/merber' , merberRouter);
app.use('/api',proxy({target: 'http://localhost:3333', changeOrigin : true}));
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


mongoose.connect('mongodb://localhost:27017/member' ,{ useNewUrlParser: true })
  .then( () => {
    var small = new Member({
      name : 'zhouhong07' ,
      age : 14
    });
    small.save( (err, res) => {
      if (err) {
        console.log(err);
        
      }
      res.speak();
    })
  },
  err => console.log(err))
module.exports = app;
