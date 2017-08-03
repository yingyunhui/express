var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var api = require('./routes/api');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static('www'));
app.use("/",index);
app.use("/api",api);

var server = app.listen(8080, function () {
  console.log('success on 8080');
});