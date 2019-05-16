const express = require('express');
const port = 3050;
const db = require('../database');
const app = express();

app.use(express.static(__dirname + '/../client/public'));

app.get('/photos', (req, res) => {
  // console.log(typeof db.getAllPhotos);
  res.send(db.getAllPhotos((results) => {
    console.log('app.get cb', results);
    return results;
  }));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports.app = app;