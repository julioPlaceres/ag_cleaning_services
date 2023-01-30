const AWS = require('aws-sdk');
const router = require('express').Router();

// Placeholders for the data
let awsData = [];

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

// Gets the request and pulls all objects in the bucket
router.get('/', (req, res) => {
  res.json(awsData);
});

(async function ObjectList() {
  // Returns a Object with all the Metadata from the objects in the S3 bucket
  AWS.config.setPromisesDependency();
  const awsResponse = await s3
    .listObjectsV2({ Bucket: process.env.BUCKET_NAME })
    .promise();
  awsData = awsResponse.Contents;
})();

module.exports = router;
