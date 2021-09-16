var express = require('express');
var app = express();
console.log("Hello world");
app.use(function middleware(req,res,next) 
    {
        console.log(req.method + " "+ req.path + " - "+ req.ip);
        next();
    }); 

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
app.get("/now",
(req, res, next) => {
  req.time = new Date().toString();
  next();
},
(req, res) => {
  res.send({
    time: req.time
  });
}
);
























































 module.exports = app;
