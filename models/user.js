/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-15 16:27:36
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-05-22 17:10:21
 */ 
const mongoose = require('mongoose') ;

const Schema = mongoose.Schema ;

const UserSchema = new Schema({
  userId : {
    type : String ,
    unique : true ,
    require : true 
  },
  account : {
    type : String
  },
  userName : {
    type :String
  },
  userIcon : {
    type :  String
  },
  password : {
    type : String
  }
},{
  collection : "user" , //选定user不在默认添加
  versionKey : false //使数据不自动添加_v
});


module.exports = mongoose.model('user', UserSchema) ;