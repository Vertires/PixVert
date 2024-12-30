# colorPixel

Welcome to the documentation of this function 👋 We strongly recommend keeping this file in sync with your function's logic to make sure anyone can easily understand your function in the future. If you don't need documentation, you can remove this file.

## 🤖 Documentation

A method used by clients to color a pixel. This is used instead of directly inserting into database in order to have full control over allowed colors and delay between palcing pixels.

Function supports admin accounts. If an user is admin, delay check is skipped.

_Example input:_

This function expects JSON input:

```json
{
    "x": 12,
    "y": 1,
    "hex": "#000000"
}
```

_Example output:_

This function returns JSON response:

**Success**:

```json
{
    "success": true,
    "skipDelay": false
}
```

**Failure**:

```json

{
    "success": false,
    "message": "You can only color pixel every 10 seconds."
}
```

## 📝 Environment Variables

List of environment variables used by this cloud function:

- **APPWRITE_FUNCTION_ENDPOINT** - Endpoint of Appwrite project
- **APPWRITE_FUNCTION_API_KEY** - Appwrite API Key
- **ALLOWED_COLORS** - Allowed colors separated by comma, for example `ff0000,ff8700,ffd300`
- **DELAY_SECONDS** - Delay for a user between painting pixels, for example `10`
- **ADMIN_USERS** - Admin IDs separated by comma, for example `matejbaco2000,matej,christy`


## 🚀 Deployment

There are two ways of deploying the Appwrite function, both having the same results, but each using a different process. We highly recommend using CLI deployment to achieve the best experience.

### Using CLI

Make sure you have [Appwrite CLI](https://appwrite.io/docs/command-line#installation) installed, and you have successfully logged into your Appwrite server. To make sure Appwrite CLI is ready, you can use the command `appwrite client --debug` and it should respond with green text `✓ Success`.

Make sure you are in the same folder as your `appwrite.json` file and run `appwrite deploy function` to deploy your function. You will be prompted to select which functions you want to deploy.

### Manual using tar.gz

Manual deployment has no requirements and uses Appwrite Console to deploy the tag. First, enter the folder of your function. Then, create a tarball of the whole folder and gzip it. After creating `.tar.gz` file, visit Appwrite Console, click on the `Deploy Tag` button and switch to the `Manual` tab. There, set the `entrypoint` to `src/mod.ts`, and upload the file we just generated.
