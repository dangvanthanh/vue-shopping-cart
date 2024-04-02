import { load, sdk } from '../deps.ts'

const client = new sdk.Client()

const env = await load()

client
	.setEndpoint(env.APP_WRITE_API_ENDPOINT)
	.setProject(env.APP_WRITE_PROJECT_ID)
	.setKey(env.APP_WRITE_API_KEY)

export default client
