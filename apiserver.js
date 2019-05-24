// var express = require('express');
// var appServer = express();
var http = require('http');
http.createServer(function( req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('request successfully proxied!' + '\n' + JSON.stringify(req.headers, true, 2));
    res.end();
}).listen(3333);

// var apiRouter = require('./routes/apis');

// appServer.use('/hello' , apiRouter);


// app.use(express.static('public'));
// server.create(3333,function(){
//     var host = server.address().address;
//     var port = server.address().port;
//     console.log('应用实例，访问地址为 http://%s:%s',host,port);
// })
 

// module.exports = appServer;
