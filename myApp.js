var express = require('express');
var app = express();
console.log("Hello world");

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });
 
































 module.exports = app;
