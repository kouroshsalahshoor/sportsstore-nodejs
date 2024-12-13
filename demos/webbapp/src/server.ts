import { createServer } from "http";
import { handler } from "./handler";
import { createServer as createHttpsServer } from "https";
import { readFileSync } from "fs";

const port = 5000;
const https_port = 5500;

const server = createServer(handler);
server.listen(port,
    () => console.log(`(Event) Server listening on port ${port}`));
const httpsConfig = {
    key: readFileSync("key.pem"),
    cert: readFileSync("cert.pem")
};
const httpsServer = createHttpsServer(httpsConfig, handler);
httpsServer.listen(https_port,
    () => console.log(`HTTPS Server listening on port ${https_port}`));

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