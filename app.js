var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var app = express();
var multer  = require('multer');
var upload = multer({ dest: './uploads/'});
var urlmodule = require('url');


app.use(bodyParser.urlencoded({ extended: false, limit: '5mb' }));
app.use(bodyParser.json({limit: '5mb'}));

app.get('/', function (req, res) {
  console.log(JSON.stringify(req.headers));
  res.send('Hello World!');
});
app.post('/', function (req, res) {
  console.log("POST:", JSON.stringify(req.headers));
  res.send('Hello World!');
});


//10k
app.get('/get-small-file', function(req, res) {
  var startTime = new Date();
  try{
    var file = fs.readFileSync('./files/tenk.txt');
  }
  catch(e){
    res.send("get-small-file error "+e);
    return;
  }
  
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
  try{
    var file = fs.readFileSync('./files/onek.txt');
  }
  catch(e){
    res.send("get-mini-file error "+e);
    return;
  }
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
  
  try{
    var file = fs.readFileSync('./files/hundredk.txt');
  }
  catch(e){
    res.send("get-medium-file error "+e);
    return;
  }
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
  
  try{
    var file = fs.readFileSync('./files/onem.txt');
  }
  catch(e){
    res.send("get-large-file error "+e);
    return;
  }
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
 
  try{
    var file = fs.readFileSync('./files/fivem.txt');
  }
  catch(e){
    res.send("get-huge-file error "+e);
    return;
  }
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
    try{
      var file = fs.readFileSync('./files/onem.txt');
    }
    catch(e){
      res.send("sleep-50 error "+e);
      return;
    }
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
    try{
      var file = fs.readFileSync('./files/onem.txt');
    }
    catch(e){
      res.send("sleep-200 error "+e);
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
    try{
      var file = fs.readFileSync('./files/onem.txt');
    }
    catch(e){
      res.send("sleep-500 error "+e);
      return;
    }
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
    try{
      var file = fs.readFileSync('./files/onem.txt');
    }
    catch(e){
      res.send("sleep-2000 error "+e);
      return;
    }
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
  try{
   var img = fs.readFileSync('./images/large.jpg');
  }
  catch(e){
    res.send("image-large: "+e);
    return;
  }
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');

  //calculate time difference
  var endTime = new Date();
  var deltaTime = endTime - startTime;
  var tag = '/image-large';
  console.log("processing %s request takes: %dms", tag, deltaTime);
});

//images-medium
app.get('/image-medium', function(req, res){
  var startTime = new Date();
  try{
   var img = fs.readFileSync('./images/medium.jpg');
  }
  catch(e){
    res.send("image-medium: "+e);
    return;
  }
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
   var img = fs.readFileSync('./images/small.jpg');
  }
  catch(e){
    res.send("image-small: "+e);
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

//load url post
app.get('/fetch-url', function(req, res) {
  try{
    var file = fs.readFileSync('./files/urls.txt');
  }catch(e){
    res.send("fetch-url error: "+e);
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
});

app.get('/fetch-dns-testing-url', function(req, res) {
  try{
    var file = fs.readFileSync('./files/dns-testing-urls.txt');
  }catch(e){
    res.send("fetch-url error: "+e);
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
});

app.get('/fetch-china-url', function(req, res) {
  try{
    var file = fs.readFileSync('./files/china-urls.txt');
  }catch(e){
    res.send("fetchchina-url error: "+e);
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
});


//load 30 site url post
app.get('/fetch-test-url', function(req, res) {
  try{
    var file = fs.readFileSync('./files/test-urls1.txt');
  }catch(e){
    res.send("fetch-url error: "+e);
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
});


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


// bandwidth measurement.
app.post('/measure-bandwidth', function(request, response){
  var url_parts = urlmodule.parse(request.url, true);
  var query = url_parts.query;
  //console.log(query);
  //console.log(query['action']);
  var rs = {
    'result' : 'false',
    'err_msg' : '',
    'data' : '' };

  try{
    var action = query['action'];
    if (action === "ask-permission"){
			//console.log(request.body['signalStrength']);
      //console.log("jsob obj:");
      rs['result'] = 'true';
      response.send(JSON.stringify(rs));
    }
    else  if (action === "query-server-list"){
      var file = fs.readFileSync('./files/bw-measure-servers.txt');
      var contents = file.toString();
      var arr = contents.split('\n');
      var arr2 = new Array();
      for(index in arr){
        var url = arr[index].trim();
        var length = url.length;
        if(length === 0) continue;
        arr2.push(url);
      }
      rs['result'] = 'true';
      rs['data'] = JSON.stringify(arr2);
      response.send(JSON.stringify(rs));
    }
    else if(action === "post-result"){
      //store data to db.
    }
  }
  catch(e){
    console.log("error in measure-bandwidth:"+e.stack);
    rs['result'] = 'false';
    rs['err_msg'] = e;
    response.send(JSON.stringify(rs));
  }
  
  //response.send("received call info json");    // echo the result back
});

//processing body
app.post('/post-callinfo', function(request, response){
  console.log(request.body);      // your JSON
  console.log("appname:"+request.get('X-Application-Name'));
  console.log("token:"+request.get('X-Token'));
  response.send("received call info json");    // echo the result back
});

app.get('/conn-testing', function(req, res){
  var startTime = new Date();
    res.send("connection succeeded");
  
    //calculate time difference
    var endTime = new Date();
    var deltaTime = endTime - startTime;
    var tag = '/conn-tesing';
    console.log("processing %s request takes: %dms", tag, deltaTime);
});

//Start listening 3000
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
  console.log('dir:'+__dirname);
});
