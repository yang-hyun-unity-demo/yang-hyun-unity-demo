const http = require('http');
const express = require('express');
const app = new express();
const hostname = '127.0.0.1';
const port = 3000;

app.use('/Build', express.static(__dirname + "/webpage/unitybundle/Build"));
app.use('/TemplateData', express.static(__dirname + "/webpage/unitybundle/TemplateData"));
app.use('/', express.static(__dirname + "/webpage/site"));

app.get('/', function(request, response){
    response.sendFile(__dirname +'/webpage/site/index.html');
});
app.get('/unity-demo', function(request, response){
    response.sendFile(__dirname +'/webpage/unitybundle/index.html');
});

app.listen(port);