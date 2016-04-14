var express = require('express');
var mongoose = require('mongoose');
var app = express();

// initialize express
// Mongoose DB Connection

mongoose.connect('mongodb://nodetojoy:nodetojoy@ds037165.mongolab.com:37165/nodetojoy');

//http is for any network protocal

var server = require('http').createServer(app);

//set port variable to deployed port or 3000 for local host
var port=process.env.PORT || 3000;

//set dirname to client folder to serve static assets (index.html)s
app.use('/',express.static(__dirname + '/../client'));


app.listen(port, function() {
  console.log("Listening on port " + port + "...");
});

