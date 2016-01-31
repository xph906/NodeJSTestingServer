var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var multer  = require('multer');
var upload = multer({ dest: './uploads/'});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});

//10k
app.get('/get-small-file', function(req, res) {
  var startTime = new Date();
  var file = fs.readFileSync('./files/tenk.txt');
  var contents = file.toString();
  res.send(contents);
  
  //calculate time difference
  var endTime = new Date();
  var deltaTime = endTime - startTime;
  var tag = '/get-small-file';
  console.log("processing %s request takes: %dms", tag, deltaTime);

});

//1k
app.get('/get-mini-file', function(req, res) {
  var startTime = new Date();
  var file = fs.readFileSync('./files/onek.txt');
  var contents = file.toString();
  res.send(contents);
  
  //calculate time difference
  var endTime = new Date();
  var deltaTime = endTime - startTime;
  var tag = '/get-mini-file';
  console.log("processing %s request takes: %dms", tag, deltaTime);
});


//100k
app.get('/get-medium-file', function(req, res) {
  var startTime = new Date();
  var file = fs.readFileSync('./files/hundredk.txt');
  var contents = file.toString();
  res.send(contents);
  
  //calculate time difference
  var endTime = new Date();
  var deltaTime = endTime - startTime;
  var tag = '/get-medium-file';
  console.log("processing %s request takes: %dms", tag, deltaTime);
});

//1M
app.get('/get-large-file', function(req, res) {
  var startTime = new Date();
  var file = fs.readFileSync('./files/onem.txt');
  var contents = file.toString();
  res.send(contents);
  
  //calculate time difference
  var endTime = new Date();
  var deltaTime = endTime - startTime;
  var tag = '/get-large-file';
  console.log("processing %s request takes: %dms", tag, deltaTime);
});

//5M
app.get('/get-huge-file', function(req, res) {
  var startTime = new Date();
  var file = fs.readFileSync('./files/fivem.txt');
  var contents = file.toString();
  res.send(contents);
  
  //calculate time difference
  var endTime = new Date();
  var deltaTime = endTime - startTime;
  var tag = '/get-huge-file';
  console.log("processing %s request takes: %dms", tag, deltaTime);
});

//sleep 50ms
app.get('/sleep-50', function(req, res){
  var startTime = new Date();
  setTimeout(function(){ 
  var file = fs.readFileSync('./files/onem.txt');
  var contents = file.toString();
  res.send("sleep for 50ms "+contents);
  
  //calculate time difference
  var endTime = new Date();
  var deltaTime = endTime - startTime;
  var tag = '/sleep-50';
  console.log("processing %s request takes: %dms", tag, deltaTime);
  }, 50);
});

//sleep 200
app.get('/sleep-200', function(req, res){
  var startTime = new Date();
  setTimeout(function(){ 
    var file = fs.readFileSync('./files/onem.txt');

   try{
    var file = fs.readFileSync('./files/onem.txt');
  }catch(e){
    res.send("error: "+e);
    return;
  }
    var contents = file.toString();
    res.send(contents);
  
    //calculate time difference
    var endTime = new Date();
    var deltaTime = endTime - startTime;
    var tag = '/sleep-200';
    console.log("processing %s request takes: %dms", tag, deltaTime);
  }, 200);
});

//sleep 500
app.get('/sleep-500', function(req, res){
  var startTime = new Date();
  setTimeout(function(){ 
    var file = fs.readFileSync('./files/onem.txt');
    var contents = file.toString();
    res.send(contents);
  
    //calculate time difference
    var endTime = new Date();
    var deltaTime = endTime - startTime;
    var tag = '/sleep-500';
    console.log("processing %s request takes: %dms", tag, deltaTime);
  }, 500);
});

//sleep 2000
app.get('/sleep-2000', function(req, res){
  var startTime = new Date();
  setTimeout(function(){ 
    var file = fs.readFileSync('./files/onem.txt');
    var contents = file.toString();
    res.send(contents);
  
    //calculate time difference
    var endTime = new Date();
    var deltaTime = endTime - startTime;
    var tag = '/sleep-2000';
    console.log("processing %s request takes: %dms", tag, deltaTime);
  }, 2000);
});

//images-large
app.get('/image-large', function(req, res){
  var startTime = new Date();
<<<<<<< HEAD
  setTimeout(function(){ 
   try{
    var img = fs.readFileSync('./files/large.txt');
  }catch(e){
    res.send("error: "+e);
    return;
  }
    res.writeHead(200, {'Content-Type': 'image/jpg' });
    res.end(img, 'binary');
=======
  var img = fs.readFileSync('./images/large.jpg');
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
>>>>>>> 2f3ecf10ccd0d4aed43828f47d07d3b3562d3066
  
  //calculate time difference
  var endTime = new Date();
  var deltaTime = endTime - startTime;
  var tag = '/image-large';
  console.log("processing %s request takes: %dms", tag, deltaTime);
});

//images-medium
app.get('/image-medium', function(req, res){
  var startTime = new Date();
  var img = fs.readFileSync('./images/medium.jpg');
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
  //calculate time difference
  var endTime = new Date();
  var deltaTime = endTime - startTime;
  var tag = '/image-medium';
  console.log("processing %s request takes: %dms", tag, deltaTime);
});

//images-large
app.get('/image-small', function(req, res){
  var startTime = new Date();
  try{
    var img = fs.readFileSync('./files/small.txt');
  }catch(e){
    res.send("error: "+e);
    return;
  }
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
  //calculate time difference
  var endTime = new Date();
  var deltaTime = endTime - startTime;
  var tag = '/image-small';
  console.log("processing %s request takes: %dms", tag, deltaTime);
});

<<<<<<< HEAD
//load url post
app.get('/fetch-url', function(req, res) {
  try{
  var file = fs.readFileSync('./files/urls.txt');
  }catch(e){
    res.send("error: "+e);
    return ;
  }
  var contents = file.toString();
  var arr = contents.split('\n');
  var arr2 = new Array();
  for(index in arr){
    var url = arr[index].trim();
    var length = url.length;
    if(length === 0)
      continue;
    arr2.push(url);
  }
  res.send(JSON.stringify(arr2));
  
  console.log("returned "+arr2.length+" urls" );
=======
//store image
app.post('/upload-photo', upload.single('photho'), function(req, res){
  console.log(req.body) // form fields
  console.log(req.file) // form files
  res.status(204).end("file uploaded");
});

//error
app.get('/404page', function(req, res){
  console.log("processing request %s for 404 page",req);
  res.status(404).end("page not exist");
});


//processing body
app.post('/post-callinfo', function(request, response){
  console.log(request.body);      // your JSON
  response.send("received call info json");    // echo the result back
>>>>>>> 2f3ecf10ccd0d4aed43828f47d07d3b3562d3066
});

//Start listening 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log('dir:'+__dirname);
});
