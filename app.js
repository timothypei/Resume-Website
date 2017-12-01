var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();
// http.createServer(function (req, res) {
//     fs.readFile('index.html', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//     });
// }).listen(8080);
app.use(express.static(__dirname + '/public'));

app.get('*', function(req, res){
    res.sendFile('/index.html', { root : __dirname})
});

app.listen(8080);
console.log("App listening on port 8080");