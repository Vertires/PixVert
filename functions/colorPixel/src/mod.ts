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

  const payload = JSON.parse(req.payload || "{}");

  // Validate position
  if (!payload.x) {
    payload.x = 0;
  }

  if (!payload.y) {
    payload.y = 0;
  }

  payload.x = +payload.x;
  payload.y = +payload.y;

  if (isNaN(payload.x) || isNaN(payload.y)) {
    return res.json({
      success: false,
      message: "Please select valid location.",
    });
  }

  if (payload.x < 0 || payload.y < 0 || payload.x > 499 || payload.y > 499) {
    return res.json({
      success: false,
      message: "Please select valid location.",
    });
  }

  // Check for admin permissions
  const adminUsers = req.env.ADMIN_USERS.split(",");
  const isAdmin = adminUsers.includes(req.env["APPWRITE_FUNCTION_USER_ID"]);

  // Validate color
  const allowedColors = req.env.ALLOWED_COLORS.split(",");

  if (!payload.hex) {
    payload.hex = allowedColors[0];
  } else {
    payload.hex = payload.hex.split("#").join("");
  }

  if (!allowedColors.includes(payload.hex)) {
    return res.json({
      success: false,
      message: "Please select valid color.",
    });
  }

  // Paint pixel
  const pixelId = `${payload.x}_${payload.y}`;

  let database = new sdk.Database(client);

  client
    .setEndpoint(req.env["APPWRITE_FUNCTION_ENDPOINT"] as string)
    .setProject(req.env["APPWRITE_FUNCTION_PROJECT_ID"] as string)
    .setKey(req.env["APPWRITE_FUNCTION_API_KEY"] as string);

  const date = Date.now();

  if (!isAdmin) {
    const history = await database.listDocuments(
      "pixelsHistory",
      [
        `userId.equal('${req.env["APPWRITE_FUNCTION_USER_ID"]}')`,
        `createdAt.greater(${date - req.env.DELAY_SECONDS * 1000})`,
      ],
      1
    );

    if (history.documents.length > 0) {
      return res.json({
        success: false,
        message:
          "You can only color pixel every " +
          req.env.DELAY_SECONDS +
          " seconds.",
      });
    }
  }

  try {
    await database.getDocument("pixelsPublic", pixelId);
    await database.updateDocument("pixelsPublic", pixelId, {
      hex: payload.hex,
      userId: req.env["APPWRITE_FUNCTION_USER_ID"],
      createdAt: date,
    });
  } catch (err) {
    await database.createDocument("pixelsPublic", pixelId, {
      hex: payload.hex,
      userId: req.env["APPWRITE_FUNCTION_USER_ID"],
      createdAt: date,
      y: payload.y,
      x: payload.x,
    });
  }

  await database.createDocument("pixelsHistory", "unique()", {
    hex: payload.hex,
    userId: req.env["APPWRITE_FUNCTION_USER_ID"],
    createdAt: date,
    y: payload.y,
    x: payload.x,
  });

  return res.json({
    success: true,
    skipDelay: isAdmin,
  });
}
