"use strict";
exports.__esModule = true;
var http_1 = require("http");
var buffer_1 = require("buffer");
var server = http_1["default"].createServer();
server.on('request', function (req, res) {
    if (req.headers.authorization) {
        var encodedPass = req.headers.authorization.split(' ')[1];
        var decodePass = buffer_1.Buffer.from(encodedPass, 'base64').toString('utf8');
        var auth = { username: decodePass.split(':')[0], password: decodePass.split(':')[1] };
        if (auth.username === 'node-test' && auth.password === 'password') {
            res.writeHead(200, { 'Content-Type': 'text/plain', 'Accept-Charset': 'utf-8' });
            res.end('success\n');
            return;
        }
        res.writeHead(401, { 'Content-Type': 'text/plain', 'Accept-Charset': 'utf-8', 'WWW-Authenticate': "Basic realm=\"Enter username and password.\"" });
        res.end('401 not authenticated\n');
        return;
    }
    server.listen(9000, function () {
        console.log('listen http://127.0.0.1:9000\n');
    });
});
