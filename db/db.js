/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-21 15:07:47
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-05-21 15:09:59
 */ 
module.exports = app =>{
  //连接数据库
  const mongoose=require("mongoose")
  mongoose.connect('mongodb://localhost:27017/test', {
    useNewUrlParser:true   //连接参数
  },() => {
    if (err) {
      console.error('Failed to connect to database');
    } else {
        console.log('Connecting database successfully');
    }
  })

// require('require-all')(__dirname + '/../models') //引用了models里所有js
}