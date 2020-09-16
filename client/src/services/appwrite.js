import Appwrite from 'appwrite';

const appwrite = new Appwrite();

appwrite
  .setEndpoint(__myapp.env.APP_WRITE_API_ENDPOINT)
  .setProject(__myapp.env.APP_WRITE_PROJECT_ID);

export default appwrite;
