const AWS = require('aws-sdk');
const router = require('express').Router();
const Gallery = require('../../models/Gallery');
const Seeder = require('../../seeders/UpdateDb');

// Placeholders for the data
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
  const needsUpdate = CheckCount(awsData.length, dbData.length);
  console.log(
    `awsData.length: ${awsData.length}, dbData.length: ${dbData.length}`
  );
  if (needsUpdate) {
    // Update DB if count does not match
    console.log('Seeding Test');
    Seeder();
    res.json(dbData);
  } else {
    // Send the DB Request to front End
    res.json(dbData);
  }
});

const CheckCount = (awsCount, dbCount) => (awsCount != dbCount ? true : false);

(async function () {
  // Returns a JSON object with all the data from the MongoDb Collection
  const dbResponse = await Gallery.find({});
  dbData = await dbResponse;

  // Returns a Object with all the Metadata from the objects in the S3 bucket
  AWS.config.setPromisesDependency();
  const awsResponse = await s3
    .listObjectsV2({ Bucket: process.env.BUCKET_NAME })
    .promise();
  awsData = awsResponse.Contents;
})();

module.exports = router;
