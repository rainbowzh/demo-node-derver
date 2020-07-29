/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-08 10:37:09
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-07-29 09:26:48
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
const compression = require('compression') ;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',ejs.__express);
app.set('view engine','html');

app.use(compression()); // 需要位于 express.static 前面，否则不起作用
app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended:false}));
app.use(require('cors')());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:false}));


// 配置可跨域访问
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By",' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });


app.use('/api/user', usersRouter);
app.use('/api/article', articleRouter);
app.use('/web/mylog', indexRouter);

//添加一些连接配置
mongoose.set('useCreateIndex', true) //加上这个
// const baseUrl = 'mongodb://localhost:27017/test' ;
const userOptions = {
  user : "zh" ,
  pwd : "I(can?pro~~4<" ,
  host : "49.235.235.22" ,
  port : "27017" ,
  name : "mylog"

}
const baseUrl = `mongodb://49.235.235.22/mylog` ;
// const baseUrl = `mongodb://${userOptions.user}:${userOptions.pwd}@${userOptions.host}:${userOptions.port}/${userOptions.name}` ;
mongoose.connect(baseUrl,{auth:{ user : 'zh' ,password : "I(can?pro~~4<"}, useNewUrlParser:true ,useUnifiedTopology: true});
mongoose.connection.on('connected', function(err) {
  if (err) {
    console.error('Failed to connect to database');
  } else {
    console.log('Connecting database successfully') ;
  }
});



module.exports = app;
