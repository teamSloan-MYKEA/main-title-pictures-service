/* eslint-disable no-console */
const express = require('express');
const db = require('../db/index.js');

const app = express();
const port = process.env.PORT || 3000;

// Use express params
app.get('/:id', (req, res) => {
  db.getPictures(req.params.id)
    .then((urls) => res.send(urls));
});

app.listen(port, () => {
  console.log(`Main-title-pictures-service listening at http://localhost:${port}`);
});
