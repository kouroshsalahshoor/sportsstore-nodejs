import { IncomingMessage, ServerResponse } from "http";
import { readFile } from "fs/promises";
//import { readFile } from "fs";
import { endPromise } from "./promises";

export const handler = async (req: IncomingMessage, res: ServerResponse) => {
    try {
        const data: Buffer = await readFile("data.json");
        await endPromise.bind(res)(data);
        console.log("File sent");
        //res.end(data, () => console.log("File sent"));
    } catch (err: any) {
        console.log(`Error: ${err?.message ?? err}`);
        res.statusCode = 500;
        res.end();
    }
};

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