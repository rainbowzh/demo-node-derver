/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-08 10:37:09
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-05-11 17:53:56
 */
const { v4: uuidv4 } = require('uuid');
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose') ;
const getExpiredTime = require('../util/help') ;

var schema = new mongoose.Schema({id:"string", name:"string" , age:"number", password:""}) ;
/* GET users listing. */

console.log('getExpiredTime-----',getExpiredTime);
const DB_URL = "mongodb://localhost:27017/test" ;
mongoose.connect(DB_URL) ;
  mongoose.connection.on('connected', function() {
    console.log('mongo connect success') ;
    var Tank = mongoose.model('Tank', schema) ;
  
    //查询数据
    router.get('/', function(req, res, next) {
      Tank.find({name : "niuniu"}).exec((err , val) => {
        if(err){
          return res.redirect("/") ;
        }
        console.log('res',val);
        let result = {
          data : val ,
          status  : 0
        }
        res.send(result);
        next();
      });
    });

    
    //保存数据通过uuid
    // router.get('/save', function(req, res, next){
    //   const curUserId = uuidv4() ;
    //   console.log('curUserId',curUserId);
    //   Tank.find({id : curUserId}).exec((err , val) => {
    //     if(err){
    //       return res.redirect("/") ;
    //     }
    //     if(val.length>=1){
    //       Tank.update({id: curUserId},{$set:{name : "rainbow"}}).exec();
    //       res.send({status : "1", message:"更新完成"}) ;
    //     }else{
    //       var small = new Tank({id : curUserId, name : "hhhhyueue",  age: 20});
    //       small.save((err,res) => {
    //         console.log("err", err,res) ;
    //         if(err) {
    //           res.send({status : "3", message:"保存失败"}) ;
    //         }else{
    //           res.send({status : "2", message:"保存成功"}) ;
    //         }
    //       })
    //     }
    //   });
    //   // next();
    // });


    //登录和注册通过用户名判断
    router.get('/registe', (req, res, next) => {
      console.log('registe:',req.query);
      let { name, password } = req.query ;
      //0.查询是否存在用户名
      //1.若存在，判断密码是否输入正确，正确则登录成功，否则提示登录失败
      //2.若不存在,判断用户名是否重复，重复则需要重新登录
      //3.登录或者注成功，则返回salt(随机生成)和uuid让客户端存储在本地
      Tank.find({name :name}).exec((err, val) => {
        if(err) {
          return res.redirect('/');
        }
        if(val.length >0){
          if(val[0].password  === password){
            //设置cookie过期时间
            //res.cookie('PPU',"5555",{path:"/",httpOnly:true,expires:new Date(Date.now() + 8 * 3600000)}) ;
            return res.send({status:"0", message:"登录成功"})
          }
          res.send({status:"-1", message:"登录失败,密码和用户名不匹配"}) ;
          // res.end();
        }else{
          const curUserId = uuidv4() ;
          let temp = new Tank({id : curUserId, name: name, age:20, password: password }) ;
          temp.save((err, val)  => {
            if(err) {
              console.log('save-err',err);
              return res.send({status : "1", message:"注册失败"}) ;
            }
            res.send({status : "2", message:"注册成功"}) ;
          })
        }
      });
    }) ;
});




module.exports = router;
