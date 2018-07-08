const express = require('express');

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use('/samples', express.static('samples'));

app.listen(port, () => {
  console.log('listening on port', port);
})