import { createServer } from "http";
import { handler } from "./handler";

const port = 5000;

const server = createServer();

server.on("request", (req, res) => {
    if (req.url?.endsWith("favicon.ico")) {
        res.statusCode = 404;
        res.end();
    } else {
        handler(req, res)
    }
});
//server.on("request", handler);
//const server = createServer(handler);

server.listen(port);

server.on("listening", () => {
    console.log(`(Event) Server listening on port ${port}`);
});
//server.listen(port, function () {
//    console.log(`Server listening on port ${port}`);
//});