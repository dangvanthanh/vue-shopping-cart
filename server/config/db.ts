import { Client, config } from '../deps.ts'

const client: Client = new Client()
client
  .setEndpoint(config().APP_WRITE_API_ENDPOINT)
  .setProject(config().APP_WRITE_PROJECT_ID)
  .setKey(config().APP_WRITE_API_KEY)

export default client
