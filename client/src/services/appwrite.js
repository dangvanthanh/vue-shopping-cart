import Appwrite from 'appwrite';

const appwrite = new Appwrite();

appwrite
  .setEndpoint('http://localhost/v1')
  .setProject('5f5904c37154c');

export default appwrite;
