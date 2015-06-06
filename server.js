var gzippo = require('gzippo');
var express = require('express');
var app = express();
 
// MIDDLE STUFF
app.use(express.static(__dirname));

app.listen(process.env.PORT || 8000);