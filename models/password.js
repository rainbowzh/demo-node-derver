/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-15 16:58:26
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-05-15 17:01:54
 */ 
const mongoose = require('mongoose') ;

const Schame = mongoose.Schema ;

const PasswordSchame = new Schame({
  userId : {
    type : String ,
    unique : true ,
    required : true
  } ,
  hash : {
    type: string ,
    required : true
  }
},{
  collection : "password" ,
  versionKey : false
});


module.exports = mongoose.model('password', PasswordSchame) ;