"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const promises_1 = require("fs/promises");
//import { readFile } from "fs";
const promises_2 = require("./promises");
const handler = async (req, res) => {
    try {
        const data = await (0, promises_1.readFile)("data.json");
        await promises_2.endPromise.bind(res)(data);
        console.log("File sent");
        //res.end(data, () => console.log("File sent"));
    }
    catch (err) {
        console.log(`Error: ${err?.message ?? err}`);
        res.statusCode = 500;
        res.end();
    }
};
exports.handler = handler;
//export const handler = (req: IncomingMessage, res: ServerResponse) => {
//readFile("data.json")
//    .then((data: Buffer) => res.end(data, () => console.log("File sent")))
//    .catch((err: Error) => {
//        console.log(`Error: ${err.message}`);
//        res.statusCode = 500;
//        res.end();
//    });
//const p: Promise<Buffer> = readFile("data.json");
//p.then((data: Buffer) => res.end(data, () => console.log("File sent")));
//p.catch((err: Error) => {
//    console.log(`Error: ${err.message}`);
//    res.statusCode = 500;
//    res.end();
//});
//readFile("data.json", (err: Error | null, data: Buffer) => {
//    if (err == null) {
//        res.end(data, () => console.log("File sent"));
//    } else {
//        console.log(`Error: ${err.message}`);
//        res.statusCode = 500;
//        res.end();
//    }
//});
//};
