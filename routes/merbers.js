var express = require('express');
var router = express.Router();
var Member = require('../Modal/Member') ;

router.get('/', function(req, res) {
    Member.find(function(err, members) {
        if (err) res.send(err);
        console.log(members);
        res.render('mess', { title: 'members' });
    });
        
});

module.exports = router ;