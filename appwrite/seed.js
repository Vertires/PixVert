// Insert Appwrite logo pixels

const sdk = require("node-appwrite");
const fs = require("fs");

require("dotenv").config();

(async () => {
  console.log(
    "This script will take a few minutes. It could be done within a minute, but it would freeze your server, which is scarry thing to do."
  );
  const client = new sdk.Client();

  client
    .setEndpoint(process.env.ENDPOINT)
    .setProject(process.env.PROJECT_ID)
    .setKey(process.env.API_KEY);

  const database = new sdk.Database(client);

  let count = 1;
  do {
    const { documents } = await database.listDocuments(
      "pixelsPublic",
      [],
      100,
      0
    );

    for (const document of documents) {
      await database.deleteDocument("pixelsPublic", document.$id);
    }

    count = documents.length;
  } while (count > 0);

  count = 1;
  do {
    const { documents } = await database.listDocuments(
      "pixelsHistory",
      [],
      100,
      0
    );

    for (const document of documents) {
      await database.deleteDocument("pixelsHistory", document.$id);
    }

    count = documents.length;
  } while (count > 0);

  const pixels = JSON.parse(fs.readFileSync("pixels.json").toString());

  for (const pixelId in pixels) {
    const [x, y] = pixelId.split("_");
    const hex = pixels[pixelId];

    await database.createDocument("pixelsPublic", pixelId, {
      userId: "appwriteOfficial",
      x,
      y,
      hex: hex.split("#").join(""),
    });

    await database.createDocument("pixelsHistory", pixelId, {
      userId: "appwriteOfficial",
      x,
      y,
      hex: hex.split("#").join(""),
      createdAt: Date.now()
    });
  }

  console.log("Appwrite logo inserted!");
})().catch((err) => {
  console.error(err);
});
