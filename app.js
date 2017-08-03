var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var index = require('./routes/index');
var api = require('./routes/api');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.static('www'));
app.use("/",index);
app.use("/api",api);

var server = app.listen(8080, function () {
  console.log('success on 8080');
});