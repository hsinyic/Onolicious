const express = require('express');
const port = 3050;
const db = require('../database');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client/public')));
app.use('/overviews/:id', express.static(path.resolve(__dirname, '../client/public')));

app.get('/overviews/:id', (req, res) => {
  res.send(200);
})

app.get('/API/photos/:id', (req, res) => {
  var index = req.params.id;
  
  db.crudFxn.getPhotos(index, (err, results) => {
    // console.log(err, results)
    if (err) {
      res.status(500).send();
    } else {
      res.status(200);
      res.send(results);
    }
  });
});

app.get('/API/info/:id', (req, res) => {
  var index = req.params.id;
  db.crudFxn.getInfo(index, (err, results) => {
    if (err) {
      res.status(500).send();
    } else {
      res.status(200);
      res.send(results);
    }
  });
});





app.listen(port, () => console.log(`Listening on port ${port}!`));

module.exports.app = app;