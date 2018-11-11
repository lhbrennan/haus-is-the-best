const express = require('express');
const parser = require('body-parser');
const AWS = require('aws-sdk');
const db = require('../database/db.js');
require('dotenv').config({ silent: process.env.NODE_ENV !== 'development' });

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
});
const s3 = new AWS.S3();

const app = express();
const port = process.env.PORT || 3000;

// static assets should be referenced with absolute paths
app.use('/', express.static('client/public'));
// app.use('/samples', express.static('samples'));
app.use('/compositions', parser.json());

app.get('/samples/:id', (req, res) => {
  const bucketParams = {
    Bucket: `${process.env.S3_BUCKET_NAME}/samples`,
    Key: req.params.id,
  };
  s3.getObject(bucketParams, (err, data) => {
    if (err) {
      console.log(err, err.stack);
    }
    res.set('Content-Length', data.ContentLength).set('Content-Type', data.ContentType);
    res.status(200).send(data.Body);
  });
});

app.get('/compositions', (req, res) => {
  const { username, compositionName } = req.query;
  // you should send feedback to your client if there's an error
  db.fetchComposition(username, compositionName)
    .then((composition) => {
      res.status(200).send(composition);
    });
});

app.post('/compositions', (req, res) => {
  // you should send feedback to your client if there's an error
  db.storeComposition(req.body);
  res.status(201).end();
});

app.listen(port, () => {
  console.log('listening on port', port);
});
