var express = require('express');
var router = express.Router();


router.get('/', function(req,res){
     let data = {}
     data["name"] = "lucy";
     data["age"] = "23";
     res.json(data);
});

module.exports = router ;