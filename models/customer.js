/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-07-02 19:22:12
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-07-02 22:19:25
 */ 

const mongoose = require('mongoose') ;

const Schame = mongoose.Schema ;

const CustomerSchame = new Schame({
  nickId: {
    type : String ,
    unique : true ,
    required : true
  } ,
  nickName : {
    type : String ,
  } ,
  sayText : {
    type: String ,
    required : true
  }
},{
  collection : "custom" ,
  versionKey : false
});


module.exports = mongoose.model('custom', CustomerSchame) ;