var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");

var userModule = require("./src/user");


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/user", userModule);


app.listen(3005, function() {
    console.log("SERVER STARTEED");
});