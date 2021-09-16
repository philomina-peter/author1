var express = require('express');
var app = express();
console.log("Hello world");

app.use(express.static(__dirname + "/public"));

app.use("/public", express.static(__dirname + "/public"));
app.get("/json", (req, res) =>
{
    res.json({
        message: "Hello json"
    });
})
var response = "hello world" .toUpperCase();
































 module.exports = app;
