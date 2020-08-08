const express = require('express');
const get = require('../db/getPictures.js');

const app = express();
const port = process.env.PORT || 3000;
// const db = require('../db/index.js');

// Use express params
app.get('/:id', (req, res) => {
  get.getPictures(req.params.id)
    .then((urls) => res.send(urls));
});

app.listen(port, () => {
  console.log(`Main-title-pictures-service listening at http://localhost:${port}`);
});
