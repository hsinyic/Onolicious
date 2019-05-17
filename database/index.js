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
  connection.query(`SELECT * FROM photos where id < 10`, (error, results, fields) => {
    if (error) throw error;
    callback(results);
  });
};

var getAllInfo = function (callback) {
  connection.query(`SELECT * FROM info ORDER BY RAND() LIMIT 1`, (error, results, fields) => {
    if (error) throw error;
    callback(results);
  });
};

module.exports.getAllPhotos = getAllPhotos;
module.exports.getAllInfo = getAllInfo;