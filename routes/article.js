/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-23 10:18:06
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-05-23 10:50:12
 */ 
const express = require('express') ;
const router = express.router ;
const Article = require('../models/article');
const { v4 : uuid } = require('uuid') ;


// router.get ('/article/list', async(req, res) => {
//   const { type = [] } = req.body ;
//   if(type.length > 0) {//查询全部表
    
//   }else{//查询筛选的表

//   }
// })


router.post ('/article/save', async(req, res) => {
  const { title = "" , context = "" , publishTime = new Date().toLocaleDateString() } = req.body ;
  //过滤title和context
  const id = uuid();
  const article =  await Article.save({ id : id, title : title, context : context, publishTime : publishTime}) ;
  if(article){
    res.json({
      status : "0" ,
      message : "成功"
    })
  }else{
    res.json({
      status : "-1" ,
      message : "失败"
    })
  }
})

module.exports = router ;