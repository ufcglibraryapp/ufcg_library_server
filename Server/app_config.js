var express = require('express');

var app = module.exports = express();

var bodyParser = require('body-parser');

var allowCors = function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '127.0.0.1:5001');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials', 'true');

    next();
}

app.listen(5001);

app.use(allowCors);

app.use(bodyParser.json({limit: "50mb"}));

app.use(bodyParser.urlencoded({
        extended: true
}));