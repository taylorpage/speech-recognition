var express = require('express');
var path = require('path');
var lib = express();

lib.listen(3000, function() {
  console.log('server started');
});

lib.get('/recog.js', function(req, res) {
  res.sendFile(path.join(__dirname + '/recog.js'));
});

lib.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
