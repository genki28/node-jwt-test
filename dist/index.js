"use strict";
// import http from 'http'
// import { Buffer } from 'buffer'
Object.defineProperty(exports, "__esModule", { value: true });
// const server = http.createServer()
// server.on('request', (req:http.IncomingMessage, res:http.ServerResponse) => {
//     if (req.headers.authorization) {
//         const encodedPass = req.headers.authorization.split(' ')[1]
//         const decodePass = Buffer.from(encodedPass, 'base64').toString('utf8')
//         const auth = { username:decodePass.split(':')[0], password:decodePass.split(':')[1] }
//         if (auth.username === 'node-test' && auth.password === 'password') {
//             res.writeHead(200, { 'Content-Type':'text/plain', 'Accept-Charset':'utf-8'})
//             res.end('success\n')
//             return
//         }
//         res.writeHead(401, {'Content-Type':'text/plain', 'Accept-Charset':'utf-8', 'WWW-Authenticate': `Basic realm="Enter username and password."`})
//         res.end('401 not authenticated\n')
//         return
//     }
//     server.listen(9000, () => {
//         console.log('listen http://127.0.0.1:9000\n')
//     })
// })
// import express from 'express'
// import * as basicAuth from 'express-basic-auth'
// const app = express()
// app.use(basicAuth(), (req: basicAuth.IBasicAuthedRequest, res, next) => {
// })
// import auth from './auth'
// import express from 'express'
// const app = express()
// const port = 3000
// app.use(auth)
// app.get("/", async (req: express.Request, res: express.Response) => {
//     try {
//         res.end('Hello World')
//     } catch (error) {
//         console.error(`Error: ${error}`, error)
//         res.status(500).send({ error: `${error}`})
//     }
// })
// app.listen(port, () => {
//     console.log(`listening on port http://localhost:3000`)
// })
// export default app
// import http from 'http'
// import { Buffer } from 'buffer'
// import auth from 'basic-auth'
// const server = http.createServer()
// server.on('request', (req: http.IncomingMessage, res: http.ServerResponse) => {
//     if (req.headers.authorization) {
//         const encodedPass = req.headers.authorization.split(' ')[1]
//         const decodePass = Buffer.from(encodedPass, 'base64').toString('utf8')
//         const auth = {
//             username: decodePass.split(':')[0],
//             password: decodePass.split(':')[1]
//         }
//         if (auth.username === 'username' && auth.password === 'password') {
//             res.writeHead(200, {'Content-Type':'text/plain', 'Accept-Charset':'utf-8'})
//             res.end('success\n')
//             return
//         }
//     }
//     res.writeHead(401, {'Content-Type':'text/plain', 'Accept-Charset':'utf-8', 'WWW-Authenticate':`Basic realm="Enter username and password."`})
//     res.end('401 not authenticated\n')
//     return
// })
// server.listen(9000, () => {
//     console.log('listen http://localhost:9000')
// })
// import express from 'express'
const express = require("express");
const basicAuth = require('basic-auth-connect');
const USERNAME = 'user';
const PASSWORD = 'password';
const PORT = 9000;
const app = express();
app.all('/home', basicAuth(function (user, password) {
    return user === USERNAME && password === PASSWORD;
}));
app.use('/home', express.static(__dirname + '/public'));
app.get('/test1', function (req, res) {
    res.send('Hello, World!');
});
app.listen(PORT);
console.log(`🚀Runnning http://localhost:${PORT}`);
//# sourceMappingURL=index.js.map