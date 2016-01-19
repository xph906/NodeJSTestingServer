var express = require('express');
var fs = require('fs');
var app = express();
var startTime = new Date();

var cacluateTimeDifference = function(tag){
  //calculate time
  var endTime = new Date();
  var deltaTime = endTime - startTime;
  console.log("processing %s request takes: %dms", tag, deltaTime);
}

app.get('/', function (req, res) {
  res.send('Hello World!');
});

//10k
app.get('/get-small-file', function(req, res) {
  var file = fs.readFileSync('./files/small-file');
  var contents = file.toString();
  res.send(contents);
  calulateTimeDifference('/get-small-file');
});

//Start listening 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
