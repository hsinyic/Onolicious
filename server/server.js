const express = require('express');
const port = 3050;
const db = require('../database');
const app = express();

app.use(express.static(__dirname + '/../client/public'));

app.get('/photos', (req, res) => {
  res.send(db.getAllPhotos((results) => {
    return results;
  }));
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

module.exports.app = app;