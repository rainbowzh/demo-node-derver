/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-23 10:18:06
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-06-29 15:06:55
 */ 
var express = require('express');
var router = express.Router();
const Article = require('../models/article');
const { v4 : uuid } = require('uuid') ;


//获取文章列表
router.get('/list', async(req, res) => {
  const list  = await Article.find({});
  console.log('list--',list);
  res.json({
    list : list ,
    status : "0" ,
    message: "成功"
  })
});


// router.post ('/article/save', async(req, res) => {
//   const { title = "" , context = "" , publishTime = new Date().toLocaleDateString() , textType = "" } = req.body ;
//   //过滤title和context
//   const id = uuid();
//   const article =  await Article.save({ id : id, title : title, context : context, publishTime : publishTime ,textType : textType}) ;
//   if(article){
//     res.json({
//       status : "0" ,
//       message : "成功"
//     })
//   }else{
//     res.json({
//       status : "-1" ,
//       message : "失败"
//     })
//   }
// }) ;


//保存文章
router.post ('/save', async(req, res) => {
  const { title = "" , context = "" , publishTime = new Date().toLocaleDateString() } = req.body ;
  //过滤title和context
  const id = uuidv4();
  const article =  new Article({ id : id, title : title, context : context, publishTime : publishTime}) ;
  await article.save();
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
});

module.exports = router ;