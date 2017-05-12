var mysql = require("mysql");

var config = {
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "DAC2017"
};

module.exports = {
    "readAllUser": function(callback) {
        var connection = mysql.createConnection(config);
        connection.connect();

        var sql = "SELECT * FROM USER";
        connection.query(sql, function(err, results) {
            console.log(results);

            // TASK COMPLETED
            callback(err, results)
            connection.end();
        });
    },

    "createUser": function(inputData) {
        var connection = mysql.createConnection(config);
        connection.connect();

        var sql = "INSERT INTO USER (NAME, EMAIL, MOBILE) VALUES (?, ?, ?)";
        var param = [inputData.name, inputData.email, inputData.mobile];

        connection.query(sql, param, function(err, results) {
            console.log(results);

            connection.end();
        });
    }
};