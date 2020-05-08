/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-08 11:18:39
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-05-08 11:23:48
 */
const express = require('express') ;
const mongoose = require('mongoose') ;

const DB_URL = "mongodb://localhost:27017" ;

mongoose.connect(DB_URL) ;
mongoose.connection.on('connected', function() {
  console.log('mongo connect success') ;
});