/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-15 16:46:08
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-06-29 14:04:36
 */ 
 
const mongoose = require('mongoose') ;
const Schame = mongoose.Schema ;

const ArticleSchame = new Schame({
  id : {
    type : String ,
    unique : true ,
    required : true
  },
  title : {
    type : String
  } ,
  context : {
    type : String
  } ,
  publishTime : {
    type : String
  },
  textType : {
    type : String
  },
},{
  collection : 'article' ,
  versionKey : false
});


module.exports = mongoose.model('article',ArticleSchame) ;