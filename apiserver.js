var express = require('express');
var cookieParser = require('cookie-parser') ;
var apiServer = express();
var mongoose = require('mongoose') ;
var session = require('express-session') ;
var bodyParser = require('body-parser');
var Member = require('./Modal/Member');

var apis = require('./routes/Apis/apis');
var User = require('./routes/Apis/User');

apiServer.use(bodyParser.urlencoded({extended: false}));
apiServer.use(cookieParser('express_react_cookie'));
apiServer.use(session({
    secret:'express_react_cookie',
    resave: true,
    saveUninitialized:true,
    cookie: {maxAge: 60 * 1000 * 30}//过期时间
}));


apiServer.use('/' ,User) ;
apiServer.use('/api' , apis) ;

mongoose.connect('mongodb://localhost:27017/member' ,{ useNewUrlParser: true })
  .then( () => {
    var small = new Member({
      name : 'zhouhong07' ,
      age : 14
    });
    small.save( (err, res) => {
      if (err) {
        console.log(err);
        
      }
      res.speak();
    })
  },
  err => console.log(err))

module.exports = apiServer ;
