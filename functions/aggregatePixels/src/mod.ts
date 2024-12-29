import { sdk } from "./deps.ts";

/*
  'req' variable has:
    'headers' - object with request headers
    'payload' - object with request body data
    'env' - object with environment variables

  'res' variable has:
    'send(text, status)' - function to return text response. Status code defaults to 200
    'json(obj, status)' - function to return JSON response. Status code defaults to 200
  
  If an error is thrown, a response with code 500 will be returned.
*/

export default async function (req: any, res: any) {
  const client = new sdk.Client();

  let db = new sdk.Database(client);
  let storage = new sdk.Storage(client);

  if (!req.env['APPWRITE_FUNCTION_ENDPOINT'] || !req.env['APPWRITE_FUNCTION_API_KEY']) {
    return res.json({ message: "Environment variables missing.", code: 500 });
  }

  client
    .setEndpoint(req.env['APPWRITE_FUNCTION_ENDPOINT'] as string)
    .setProject(req.env['APPWRITE_FUNCTION_PROJECT_ID'] as string)
    .setKey(req.env['APPWRITE_FUNCTION_API_KEY'] as string);

  const documents: any[] = [];
  let cursor = undefined;

  let hasNext = true;
  do {
    const dbResponse: sdk.Models.DocumentList<sdk.Models.Document> = await db.listDocuments<sdk.Models.Document>(
      "pixelsPublic",
      [
        "x.lesserEqual(500)",
        "x.greaterEqual(0)",
        "y.lesserEqual(500)",
        "y.greaterEqual(0)",
      ],
      100,
      undefined,
      cursor,
      "after"
    );

    documents.push(...dbResponse.documents.map((d: any) => {
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
  } while (hasNext);

  const filePath = "out.json";
  await Deno.writeTextFile(filePath, JSON.stringify({
    syncAt: Date.now(),
    docs: documents
  }));

  const newFile = await storage.createFile("pixels", 'unique()', filePath);

  const allFiles = await storage.listFiles(
    "pixels",
    undefined,
    1,
    undefined,
    undefined,
    undefined,
    "ASC"
  );

  for (const file of allFiles.files) {
    if (file.$id !== newFile.$id) {
      await storage.deleteFile("pixels", file.$id);
    }
  }

  res.json({
    success: true,
    id: newFile.$id
  });
}