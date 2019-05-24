const express = require('express');
const port = 3050;
const db = require('../database');
const app = express();

app.use(express.static(__dirname + '/../client/public'));

app.get('/photos', (req, res) => {
  db.getAllPhotos((results) => {
    res.status(200);
    res.send(results);
  });
});

app.get('/info', (req, res) => {
  db.getAllInfo((results) => {
    res.status(200);
    res.send(results);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));

module.exports.app = app;