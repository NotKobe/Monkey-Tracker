var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 3000;


var fs = require('fs');


var tweetinfo = []

//load the input file
fs.readFile('favs.json', 'utf8', function readFileCallback(err,data ){
  if(err){
    req.log.info('cannot load a file:' + fileFolder + '/' + _file_name)
    throw err;
  }
  else{
    let tweetData = JSON.parse(data)
    tweetData.forEach(function(element) {
      tweetinfo.push({tweetid:element.id,tweettext:element.text});
    });
  }
});
 
var searchinfo = [];

app.use(express.static(__dirname));
app.use(bodyParser.json());

//Get functions
//Shows user info
app.get('/tweets', function(req, res) {
  res.send({ tweets: tweetinfo});
});

//Shows tweet info
app.get('/tweetinfo', function(req, res) {
  res.send({ tweetinfo: tweetinfo});
});

//Shows searched tweets
app.get('/searchinfo', function(req, res){
  res.send({ searchinfo: searchinfo})
});


app.listen(PORT, function() {
  console.log('Server listening on ' + PORT);
});