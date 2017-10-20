var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname));

app.listen(8002);
console.log("Servidor corriendo OK! Puerto 8002");

