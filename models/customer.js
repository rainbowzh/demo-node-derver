/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-07-02 19:22:12
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-07-02 19:24:13
 */ 

const mongoose = require('mongoose') ;

const Schame = mongoose.Schema ;

const CustomerSchame = new Schame({
  nickName : {
    type : String ,
    unique : true ,
    required : true
  } ,
  sayText : {
    type: string ,
    required : true
  }
},{
  collection : "password" ,
  versionKey : false
});


module.exports = mongoose.model('password', CustomerSchame) ;