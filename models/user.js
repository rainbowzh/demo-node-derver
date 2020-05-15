/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-15 16:27:36
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-05-15 16:58:08
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
  }
},{
  collection : "user" ,
  versionKey : false
});


module.exports = mongoose.model('user', UserSchema) ;