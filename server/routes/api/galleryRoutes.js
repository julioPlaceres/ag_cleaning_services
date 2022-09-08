const AWS = require('aws-sdk');
const router = require('express').Router();
const Gallery = require('../../models/Gallery');

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
  getImagesCount().then(([dbData, awsData]) => {
    console.log('AWS Data: ' + awsData);
    console.log('DB Data: ' + dbData);
    console.log('matched: ' + awsData.length != dbData.length);
  });
});

async function getImagesCount() {
  console.log('Initiating Images Count');
  const [dbResponse, awsResponse] = await Promise.all([
    GetDbData(),
    getAwsData(),
  ]);

  const dbData = await dbResponse;
  const awsData = await awsResponse;

  return [dbData, awsData];
}

async function GetDbData() {
  console.log('Getting DB Data');
  const response = await Gallery.find({});
  const data = await response;
  console.log('Db Data func: ' + data);
  return data;
}

function getAwsData() {
  console.log('Getting AWS Data');
  const data = s3.listObjectsV2(async function (err, data) {
    const response = await data.Contents;
    console.log('res: ' + JSON.stringify(response));
    return response;
  });
  console.log('AWS Data func: ' + data);
  return data;
}

function dbUpdate() {
  console.log('Database Needs to Update');
}

module.exports = router;
