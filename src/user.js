var express = require("express");
var userModule = require("./userOperation");
var router = express.Router();


router.get("/", function(req, res) {

    userModule.readAllUser(function(err, results) {
        res.json(results);
    });
});

router.post("/", function(req, res) {
    var inputData = req.body;

    // calling layer 3
    userModule.createUser(inputData);

    res.json(inputData);
});


module.exports = router;