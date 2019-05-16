var mysql = require('mysql');
var mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
  if (err) {
    console.error('mysql connection error!');
    return;
  }
  console.log('mysql connected!');
});

var getAllPhotos = function (callback) {
  connection.query(`SELECT * FROM photos where id < 3`, (error, results, fields) => {
    if (error) throw error;
    callback(results);
  });
};

module.exports.getAllPhotos = getAllPhotos;