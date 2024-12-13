"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
//import { readFile } from "fs/promises";
//import { readFile } from "fs";
const promises_1 = require("./promises");
//import { Worker } from "worker_threads";
const counter_cb_1 = require("./counter_cb");
const total = 2000000000;
const iterations = 5;
let shared_counter = 0;
const handler = async (req, res) => {
    const request = shared_counter++;
    (0, counter_cb_1.Count)(request, iterations, total, async (err, update) => {
        if (err !== null) {
            console.log(err);
            res.statusCode = 500;
            await res.end();
        }
        else if (update !== true) {
            const msg = `Request: ${request}, Iteration: ${(update)}`;
            console.log(msg);
            await promises_1.writePromise.bind(res)(msg + "\n");
        }
        else {
            await promises_1.endPromise.bind(res)("Done");
        }
    });
    //const worker = new Worker(__dirname + "/count_worker.js", {
    //    workerData: {
    //        iterations,
    //        total,
    //        request
    //    }
    //});
    //worker.on("message", async (iter: number) => {
    //    const msg = `Request: ${request}, Iteration: ${(iter)}`;
    //    console.log(msg);
    //    await writePromise.bind(res)(msg + "\n");
    //});
    //worker.on("exit", async (code: number) => {
    //    if (code == 0) {
    //        await endPromise.bind(res)("Done");
    //    } else {
    //        res.statusCode = 500;
    //        await res.end();
    //    }
    //});
    //worker.on("error", async (err) => {
    //    console.log(err)
    //    res.statusCode = 500;
    //    await res.end();
    //});
    //const iterate = async (iter: number = 0) => {
    //    for (let count = 0; count < total; count++) {
    //        count++;
    //    }
    //    const msg = `Request: ${request}, Iteration: ${(iter)}`;
    //    console.log(msg);
    //    await writePromise.bind(res)(msg + "\n");
    //    if (iter == iterations - 1) {
    //        await endPromise.bind(res)("Done");
    //    } else {
    //        setImmediate(() => iterate(++iter));
    //    }
    //}
    //iterate();
    //for (let iter = 0; iter < iterations; iter++) {
    //    for (let count = 0; count < total; count++) {
    //        count++;
    //    }
    //    const msg = `Request: ${request}, Iteration: ${(iter)}`;
    //    console.log(msg);
    //    await writePromise.bind(res)(msg + "\n");
    //}
    //await endPromise.bind(res)("Done");
    //try {
    //    const data: Buffer = await readFile("data.json");
    //    await endPromise.bind(res)(data);
    //    console.log("File sent");
    //    //res.end(data, () => console.log("File sent"));
    //} catch (err: any) {
    //    console.log(`Error: ${err?.message ?? err}`);
    //    res.statusCode = 500;
    //    res.end();
    //}
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
