const AWS = require('aws-sdk');
const router = require('express').Router();
const Gallery = require('../../models/Gallery');

let awsData = [];
let dbData = [];

// Initialize the Amazon Cognito credentials provider
AWS.config.region = process.env.AWS_REGION;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.IDENTITY_POOL_ID,
});

// Create a new service object
var s3 = new AWS.S3({
  apiVersion: process.env.API_VERSION,
  params: { Bucket: process.env.BUCKET_NAME },
});

// Gets the request and checks if the Db needs to be updated
router.get('/', (req, res) => {
  console.log('AWS Length: ' + awsData.length);
  console.log('DB Length: ' + dbData.length);
    console.log('AWS Data: ' + awsData);
    console.log('DB Data: ' + dbData);
    console.log('matched: ' + awsData.length != dbData.length);
    dbUpdate(awsData.length, dbData.length);
});

(async function(){
  try{
    AWS.config.setPromisesDependency();
    const response = await s3.listObjectsV2({Bucket: process.env.BUCKET_NAME}).promise();
    awsData = response.Contents;
  }
  catch(e){
    console.log(`Error: ${e}`);
  }
})();

(async function(){
  const response = await Gallery.find({});
  dbData = await response;
})();

function dbUpdate(awsCount, dbCount) {
  console.log(`There are ${awsCount} in AWS and ${dbCount}`);
  console.log('Database Needs to Update');
}

module.exports = router;
