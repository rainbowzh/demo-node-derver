var express = require('express');
var router = express.Router();
var responseClient = require('../../util');

router.use('/' ,(req, res, next) => {
    if(req.session.userInfo) {
        next() ;
    }else{
        res.send(responseClient(res, 200, 1, '身份信息过期，请重新登录'));
    }
}) ;

// router.use('/tags' ,Tags) ;
// router.use('/article' ,Articles) ;
// router.use('/getUsers' ,(req ,res) => {

// })

module.exports = router ;