/*
 * @Description: 
 * @Version: 2.0
 * @Author: zhouhong07
 * @Date: 2020-05-08 10:37:09
 * @LastEditors: zhouhong07
 * @LastEditTime: 2020-06-12 09:06:00
 */
var express = require('express');
var router = express.Router();

/* GET home page. */


//设置返回模板,区分m还是pc
router.get('/', function(req, res, next) {
  var deviceAgent = req.headers["user-agent"].toLowerCase();
  var agentID = deviceAgent.match(/(iphone|ipod|ipad|android)/);
  if(agentID){
    res.render('mobile', { title: 'Express' },(err, html) => {
      res.set('Content-Type', 'text/html')
      res.send(html) ;
    });
  }
  else{
    res.render('index', { title: 'Express' },(err, html) => {
      res.set('Content-Type', 'text/html')
      res.send(html) ;
    });
  }
});

module.exports = router;
