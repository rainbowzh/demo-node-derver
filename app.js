/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-08 10:37:09
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-05-21 19:29:21
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs') ;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mongoose = require('mongoose') ;
var app = express();
var bodyParser = require('body-parser');


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',ejs.__express);
app.set('view engine','html');



app.use(logger('dev'));
app.use(express.json());
app.use(require('cors')());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//配置可跨域访问
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By",' 3.2.1')
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });



//后端路由

// app.post('/users/admin/api/login', (req,res) => {
//   console.log(req, res);
//   const { username, password } = req.body ;  //解构赋值
//   console.log('----',username,password);
//   res.json({
//     status : "444"
//   })
// })

// app.use('/', indexRouter);
app.use('/api', usersRouter);


mongoose.connect('mongodb://localhost:27017/test',{useNewUrlParser:true});
mongoose.connection.on('connected', function(err) {
  if (err) {
    console.error('Failed to connect to database');
  } else {
    console.log('Connecting database successfully') ;
  }
});



module.exports = app;
