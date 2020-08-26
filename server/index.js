const express = require('express');
const path = require('path');
const cors = require('cors');
const db = require('../db/index.js');
const bodyparser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;
// Not sure if CORS is needed:
app.use(bodyparser());
app.use(cors());

app.use('/:id', express.static(path.join(__dirname, '..', '/public')));

// Use express params
app.get('/:id/pictures/:id', (req, res) => {
  db.getPictures(req.params.id)
    .then((urls) => res.send(urls))
    .catch(() => res.status(500).send('Internal Server Error'));
});

app.post('/', (req, res) => {
  db.addItem(req.body);
  res.send(req.body);
});

app.put('/', (req, res) => {
  db.updateItem(req.body);
  res.send(req.body);
});

app.delete('/:id', (req, res) => {
  db.deleteItem(req.params.id);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Main-title-pictures-service listening at port: ${port}`);
});


