"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
const handler_1 = require("./handler");
const https_1 = require("https");
const fs_1 = require("fs");
const port = 5000;
const https_port = 5500;
const server = (0, http_1.createServer)(handler_1.handler);
server.listen(port, () => console.log(`(Event) Server listening on port ${port}`));
const httpsConfig = {
    key: (0, fs_1.readFileSync)("key.pem"),
    cert: (0, fs_1.readFileSync)("cert.pem")
};
const httpsServer = (0, https_1.createServer)(httpsConfig, handler_1.handler);
httpsServer.listen(https_port, () => console.log(`HTTPS Server listening on port ${https_port}`));
//const server = createServer();
//server.on("request", (req, res) => {
//    if (req.url?.endsWith("favicon.ico")) {
//        res.statusCode = 404;
//        res.end();
//    } else {
//        handler(req, res)
//    }
//});
//server.on("request", handler);
//const server = createServer(handler);
//server.listen(port);
//server.on("listening", () => {
//    console.log(`(Event) Server listening on port ${port}`);
//});
//server.listen(port, function () {
//    console.log(`Server listening on port ${port}`);
//});
