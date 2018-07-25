const express = require('express');
const parser = require('body-parser');
const path = require('path');

const db = require('../database/db.js');

const app = express();
// maybe reference your port from an environment variable
const port = 3000;
// static assets should be referenced with absolute paths
app.use('/', express.static('public'));
app.use('/samples', express.static('samples'));
app.use('/compositions', parser.json());

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
})