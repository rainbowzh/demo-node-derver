/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-08 10:37:09
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-07-02 14:42:46
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs') ;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var articleRouter = require('./routes/article');
var mongoose = require('mongoose') ;
var app = express();
var bodyParser = require('body-parser');
var compression = require('compression')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',ejs.__express);
app.set('view engine','html');



// app.use(compression());//启用压缩
app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended:false}));
app.use(require('cors')());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(compression());//启用压缩
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));


// 配置可跨域访问
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});


app.use('/api/user', usersRouter);
app.use('/api/article', articleRouter);
app.use('/web/mylog', indexRouter);

//添加一些连接配置
mongoose.set('useCreateIndex', true) //加上这个
mongoose.connect('mongodb://49.235.235.22:27017/test',{useNewUrlParser:true ,useUnifiedTopology: true});
mongoose.connection.on('connected', function(err) {
  if (err) {
    console.error('Failed to connect to database');
  } else {
    console.log('Connecting database successfully') ;
  }
});



module.exports = app;
