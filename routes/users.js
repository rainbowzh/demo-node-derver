/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-08 10:37:09
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-05-08 16:31:34
 */
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose') ;

var schema = new mongoose.Schema({id:"number", name:"string" , age:"number"}) ;
/* GET users listing. */


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
    });

    
    //保存数据
    router.get('/save', function(req, res, next){
      Tank.find({name : "cccc"}).exec((err , val) => {
        if(err){
          return res .redirect("/") ;
        }
        if(val.length<1){
          Tank.update({id: 123},{$set:{name : "rainbow"}}).exec();
          res.send({status : "1", message:"更新完成"}) ;
        }else{
          var small = new Tank({id : 123, name : "niuniu",  age: 30});
          small.save((err) => {
            console.log("err", err) ;
          })
          res.send({status : "2", message:"保存成功"}) ;
        }
      });
    });


  });
    
});

module.exports = router;
