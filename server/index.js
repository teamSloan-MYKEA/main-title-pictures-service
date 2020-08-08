/* eslint-disable no-console */
const express = require('express');
const path = require('path');
const db = require('../db/index.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '..', '/client', '/dist')));

// app.get('/', (req, res) => {
//   res.send('Hello World');
// });

// Use express params
app.get('/:id', (req, res) => {
  db.getPictures(req.params.id)
    .then((urls) => res.send(urls));
});

app.listen(port, () => {
  console.log(`Main-title-pictures-service listening at http://localhost:${port}`);
});
