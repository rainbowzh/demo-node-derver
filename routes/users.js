/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-08 10:37:09
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-08-06 16:50:17
 */
const { v4: uuidv4 } = require('uuid');
const express = require('express');
const router = express.Router();
const passport = require('../util/passport') ;
const jwt=require('jsonwebtoken');
const assert=require('http-assert');
var mongoose = require('mongoose') ;
const User = require('./../models/user') ;
const Article = require('../models/article');
const Customer = require('../models/customer') ;

var responseData;

router.use( function (req,res,next) {
  responseData = {
      code: 0,
      message:''
  };
  next();
});



//登录
 router.post('/login', async (req,res) => {
  const { username, password } = req.body ;  //解构赋值
  console.log('----',username, password);
  // res.json({
  //   status : "33"
  // }) ;
  //1.根据用户名找用户 
  const user =  await User.findOne({userName : username, password : password}) ;
  console.log('user', user) ;
  if(user != null) {
    const isValid = passport.validate(password, user.password) ;
    if(isValid) {
      res.send({
        status: "0" ,
        message : "登录成功"
      });
      // const token = jwt.sign({id:user._id},app.get('secret')) ;   //生成token 给密钥secret防止客户端篡改信息
      // res.send({token}) ; //发送token给客户端
    }else{
      res.json({
        status : "422" ,
        message : "密码错误"
      })
    }
  }else{
    res.json({
      status : "422" ,
      message : "用户不存在"
    });
  }
 });



 //注册
router.post('/register',function (req,res) {
  // console.log(req.body);
  var username = req.body.username;
  var password = req.body.password;
  var repassword = req.body.repassword;
  var mobile = req.body.mobile;
  var email = req.body.email;
  // 判断用户名是否为空
  if( username == ''){
      responseData.code = 2;
      responseData.message = '用户名不能为空';
      res.json(responseData);
      return;
  }
  // 判断密码是否为空
  if( password == ''){
      responseData.code = 2;
      responseData.message = '密码不能为空';
      res.json(responseData);
      return;
  }
  // 判断两次密码是否一致
  if( password != repassword){
      responseData.code = 2;
      responseData.message = '两次输入密码不一致';
      res.json(responseData);
      return;
  }
  // 判断用户名是否已经注册
  User.findOne({
      userName:username
  },function (err,doc) {
    if(doc){
        responseData.code = 3;
        responseData.message = '用户名已经被注册了';
        res.json(responseData);
        return;
    }
    // 保存用户注册的信息到数据中
    var user = new User({
        userName: username,
        password: password ,
        userId : uuidv4()
    });
    user.save();
    responseData.code = 4;
    responseData.message = '注册成功';
    res.json(responseData);
    return;
  });
});


//留言
router.post('/sayWords/save', ( async (req, res) => {
  let { nickName = "" , sayText = "" } = req.body ;
  let nickId = Math.random().toString(36).slice(2) ;
  console.log(nickId, nickName,sayText);
  let custom = new Customer({ nickId : nickId , nickName : nickName, sayText : sayText }) ;
  await custom.save();
  //存储留言信息
  console.log(nickId, nickName,sayText,custom);
  if(custom){
    res.json({
      status : "0" ,
      message : "成功"
    })
  }else{
    res.json({
      status : "-1" ,
      message : "失败"
    })
  }
}));


//获取留言板信息
router.get('sayWords/get' , async() => {
  let sayContent = await Customer.find({}); 
  res.json({
    status : "0" ,
    message : "成功" ,
    list : sayContent
  });
})

// //保存文章
// router.post ('/article/save', async(req, res) => {
//   const { title = "" , context = "" , publishTime = new Date().toLocaleDateString() } = req.body ;
//   //过滤title和context
//   const id = uuidv4();
//   const article =  new Article({ id : id, title : title, context : context, publishTime : publishTime}) ;
//   await article.save();
//   if(article){
//     res.json({
//       status : "0" ,
//       message : "成功"
//     })
//   }else{
//     res.json({
//       status : "-1" ,
//       message : "失败"
//     })
//   }
// });


// //获取文章列表
// router.get('/article/list', async(req, res) => {
//   const list  = await Article.find({});
//   console.log('list--',list);
//   res.json({
//     list : list ,
//     status : "0" ,
//     message: "成功"
//   })
// });

module.exports = router ;