import { sdk, load } from "../deps";

const client = new sdk.Client();

const env = await load();

client
    .setEndpoint(env["APP_WRITE_API_ENDPOINT"])
    .setProject(env["APP_WRITE_PROJECT_ID"])
    .setKey(env["APP_WRITE_API_KEY"])

    export default client
