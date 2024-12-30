const dotenv = require("dotenv");
const sdk = require('node-appwrite');
const fs = require("fs");

dotenv.config();

const client = new sdk.Client();

client
    .setEndpoint(process.env.ENDPOINT)
    .setProject(process.env.PROJECT_ID)
    .setKey(process.env.API_KEY);

const db = new sdk.Database(client);

(async () => {
    let documents = [];
    let cursor = undefined;

    try {
        const fileJson = JSON.parse(fs.readFileSync("pixels.json").toString());
        cursor = fileJson[fileJson.length - 1].$id;
        documents = fileJson;

        console.log("Loaded cursor ", cursor, documents.length);
    } catch (err) {
        console.log(err);
    }

    let hasNext = true;
    do {
        console.log("Still downloadin ... ", cursor);
        const dbResponse = await db.listDocuments(
            "pixelsHistory",
            undefined,
            100,
            undefined,
            cursor,
            "after",
            ["createdAt"],
            ["ASC"]
        );

        documents.push(...dbResponse.documents.map((d) => {
            delete d.$collection;
            delete d.$read;
            delete d.$write;
            return d;
        }));

        if (dbResponse.documents.length > 0) {
            cursor = dbResponse.documents[dbResponse.documents.length - 1].$id;
        } else {
            hasNext = false;
        }

        fs.writeFileSync("pixels.json", JSON.stringify(documents));
    } while (hasNext);

})().catch((err) => {
    console.error(err);
})