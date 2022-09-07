const AWS = require('aws-sdk');
const router = require('express').Router();
const Gallery = require('../../models/Gallery');

let awsData = 0;
let dbData = 0;

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


  // Gets count of the images in the Database
  Gallery.find({})
    .then((dbImg) => {
      dbData = res.json(dbImg);
    })

    // Get Count of Images in AWS
    .then(() => {
      s3.listObjectsV2(function (err, data) {
        if (!err) {
          awsData = data.Contents;
          console.log("AWS Count: " + awsData);
          console.log("DB Count: " + dbData);
        }
      });
    })
    .catch((err) => {
      res.status(400).json(err);
    })
    .finally((awsData.length != dbData.length) ? "" : dbUpdate());
});

function GetDbCount(){
  
}

function dbUpdate(){
  console.log("Database Needs to Update")
}

module.exports = router;
