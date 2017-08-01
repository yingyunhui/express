var express = require('express');
var app = express();

app.use(express.static('www'));

app.get('/api', function (req, res) {
  res.send('ok');
});

var server = app.listen(8888, function () {
  console.log('success on 8888');
});