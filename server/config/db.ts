import { Client, config } from '../deps.ts';

const client: any = new Client();
client.setEndpoint(config().APP_WRITE_API_ENDPOINT);
client.setKey(config().APP_WRITE_API_KEY);
client.setProject(config().APP_WRITE_PROJECT_ID);

export default client;
