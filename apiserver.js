var express = require('express');
var createError = require('http-errors');
var path = require('path') ;
var cookieParser = require('cookie-parser') ;
var logger = require('morgan') ;


var apiServer = express();

var apis = require('./routes/apis');


apiServer.set('views',path.join(__dirname ,'views'));
apiServer.set('view engine','jade') ;


apiServer.use(logger('dev')) ;
apiServer.use(express.json()) ;
apiServer.use(express.urlencoded({extended : false})) ;
apiServer.use(cookieParser()) ;
apiServer.use(express.static(path.join(__dirname ,'public'))) ;

apiServer.use('/' , apis) ;


apiServer.use( (req, res ,next) => {
    next(createError(404)) ;
})

apiServer.use((err, req, res ,next) => {
    res.locals.message = err.message ;
    res.locals.error = req.app.get('env') === 'development' ? err : {} ;

    res.status(err.status || 500) ;
    res.render('error') ;
})



module.exports = apiServer ;
