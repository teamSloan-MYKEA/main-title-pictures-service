const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../db/index.js');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());

app.use('/:id', express.static(path.join(__dirname, '..', '/public')));

// Use express params
app.get('/:id/api/:id', (req, res) => {
  db.getPictures(req.params.id)
    .then((urls) => res.send(urls))
    .catch(() => res.status(500).send('Internal Server Error'));
});

app.listen(port, () => {
  console.log(`Main-title-pictures-service listening at http://localhost:${port}`);
});
