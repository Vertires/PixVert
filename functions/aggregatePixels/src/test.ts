import Function from "./mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

const env = config();

try {
    await Function({
        env,
        payload: '{}'
    }, {
        json: (data: any) => {
            console.log(data);
            Deno.exit();
        }
    })
} catch (err) {
    console.error(err);
    Deno.exit();
} finally {
    Deno.exit();
}