var createError = require('http-errors');
var express = require('express');
var ejs = require('ejs')
var path = require('path');
var logger = require('morgan');//中间件
var  connectHistoryApiFallback = require('connect-history-api-fallback') ;
var proxy = require( 'http-proxy-middleware');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var merberRouter = require('./routes/merbers') ;


var app = express();
// var Express = express ;

// view engine setup, if dont have ,will drop an error;
app.set('views', path.join(__dirname, 'views'));  //设置views文件夹为存放视图文件的目录，即存放模板的地方，__dirname为全局变量，存储当前正在执行的脚本所在的目录。
app.engine('html',ejs.__express);
app.set('view engine', 'html');




// app.use('/',express.static(path.join(__dirname,"..",'build')));
// app.use('/', connectHistoryApiFallback());

app.use(logger('dev'));//记录morgan中间件日志
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/merber' , merberRouter);


//代理api
var options = {
  target : 'http://localhost:3333' ,
  changeOrigin : true
}
var exampleProxy = proxy(options) ;
app.use('/api', exampleProxy);




/****
 * @intro ： control error;
 */


//catch 404 and forward to error handler
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
