var express = require('express');
var app = express();
console.log("Hello world");

app.use(express.static(__dirname + "/public"));
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });
 

app.use("/public", express.static(__dirname + "/public"));
app.get("/json", (req, res) =>
{
  

if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({"message":"HELLO JSON"});
  } else {
    res.json({"message":"Hello json"}); 
}
});

























































 module.exports = app;
