const express = require('express');
const path = require('path');
const db = require('../db/index.js');

const app = express();
const port = process.env.PORT || 3000;

app.use('/', express.static(path.join(__dirname, '..', '/client', '/dist')));

// Use express params
app.get('/:id', (req, res) => {
  console.log('REcieved request')
  db.getPictures(req.params.id)
    .then((urls) => res.send(urls))
    .catch(() => res.status(500).send('Internal Server Error'));
});

app.listen(port, () => {
  console.log(`Main-title-pictures-service listening at http://localhost:${port}`);
});
