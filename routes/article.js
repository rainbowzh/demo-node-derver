/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-23 10:18:06
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-07-01 17:55:13
 */ 
var express = require('express');
var router = express.Router();
const Article = require('../models/article');
const { v4 : uuid } = require('uuid') ;
const tagList  = require('../global/tagType') ;

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
  const id = Math.random().toString(36).slice(2);
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


//按照文章id查询文章信息
router.get ('/detail', async(req, res) => {
  const { id = "" } = req.query ;
  console.log("id",req.query);
  const curIdArticle = await Article.findOne({id : id}) ;
  console.log("curIdArticle" , curIdArticle) ;
  res.json({
    status : "0" ,
    message : "成功" ,
    data : curIdArticle || {}
  })
 
});


router.get('/tagList', ( req, res) => {
  console.log('tagggg', tagList) ;
   res.json({
    status : "0" ,
    message : "成功" ,
    data : tagList || []
  })
})

module.exports = router ;