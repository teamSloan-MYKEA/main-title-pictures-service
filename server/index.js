const express = require('express');
const path = require('path');
const db = require('../db/index.js');

const app = express();
const port = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, '..', '/client', '/dist')));

app.use('/:id', (req, res) => {
  db.getPictures(req.params.id)
    .then(((urls) => {
      res.send(urls);
      express.static(path.join(__dirname, '..', '/client', '/dist'));
    }))
    .catch(() => res.status(500).send('Internal Server Error'));
});

// Use express params
// app.get('/:id', (req, res) => {
//   db.getPictures(req.params.id)
//     .then((urls) => res.send(urls))
//     .catch(() => res.status(500).send('Internal Server Error'));
// });

app.listen(port, () => {
  console.log(`Main-title-pictures-service listening at http://localhost:${port}`);
});
