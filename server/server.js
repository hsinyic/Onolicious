const express = require('express');
const port = 3050;
const db = require('../database');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../client/public')));

app.get('/API/photos/:id', (req, res) => {
  var index = req.params.id;
  db.crudFxn.getPhotos(index, (results) => {
    res.status(200);
    res.send(results);
  });
});

app.get('/API/info/:id', (req, res) => {
  var index = req.params.id;
  db.crudFxn.getInfo(index, (results) => {
    res.status(200);
    res.send(results);
  });
});

app.post('/API/info/:id', (req, res) => {
  var index = req.params.id;
  db.crudFxn.getPhoto(index, (err, results) => {
    if (err){
      res.status(505);
    }
    res.status(200);
    res.send(results);
  });
  res.status(200);
  res.send();
});



app.post('/API/photos/:id', (req, res) => {
  var index = req.params.id;

  
  res.status(200);
  res.send();
});

app.put('/API/info/:id', (req, res) => {
  var index = req.params.id;
  res.status(200);
  res.send();
});



app.put('/API/photos/:id', (req, res) => {
  var index = req.params.id;

  res.status(200);
  res.send();
});

app.delete('/API/info/:id', (req, res) => {
  var index = req.params.id;
  res.status(200);
  res.send();
});



app.delete('/API/photos/:id', (req, res) => {
  var index = req.params.id;
  res.status(200);
  res.send();
});




app.listen(port, () => console.log(`Listening on port ${port}!`));

module.exports.app = app;