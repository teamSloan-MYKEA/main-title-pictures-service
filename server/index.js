const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
// const db = require('../db/index.js');

// Use express params
app.get('/:id', (req, res) => {
  res.send(`Id: ${req.params.id}`);
});

app.listen(port, () => {
  console.log(`Main-title-pictures-service listening at http://localhost:${port}`);
});