import AWS from 'aws-sdk';

var bucketName = 'agcleaningservices';
var urlLink = 'https://agcleaningservices.s3.amazonaws.com/';

// Initialize the Amazon Cognito credentials provider
AWS.config.region = 'us-east-1';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-1:482399f9-475b-41d5-a3bb-c3260ff3f8f7',
});

// Create a new service object
var s3 = new AWS.S3({
  apiVersion: '2006-03-01',
  params: { Bucket: bucketName },
});

const Gallery = () => {
    s3.listObjects(function (err, data) {
      if (err) {
        return alert('There is a problem loading the images' + err.message);
      } else {
        return data.Contents
      }
    });
  };

export default Gallery;