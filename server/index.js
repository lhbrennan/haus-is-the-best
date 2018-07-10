const express = require('express');
const parser = require('body-parser');
const path = require('path');

const db = require(path.join(__dirname, '../database/db.js'));

const app = express();
const port = 3000;

app.use('/', express.static('public'));
app.use('/samples', express.static('samples'));
app.use('/compositions', parser.json());

app.get('/compositions', (req, res) => {
  console.log('get request: ');
  console.log(req.query);
  const { username, compositionName } = req.query; 
  db.fetchComposition(username, compositionName)
    .then((composition) => {
      console.log('fetched composition from database:');
      console.log(composition);
      res.status(200).send(composition);
    });
});

app.post('/compositions', (req, res) => {
  console.log(req.body); 
  db.storeComposition(req.body);
  res.status(201).send('POST request to the homepage');
});

app.listen(port, () => {
  console.log('listening on port', port);
})