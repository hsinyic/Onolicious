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
  // `SELECT * FROM users WHERE id IS 1`
  connection.query(`SELECT * FROM photos where id = 1`, (error, results, fields) => {
    if (error) throw error;
    console.log('getallphotos cb', results);
    callback(results);
  });
};

var sendUnrelatedReport = (callback, id) => {
  connection.query(`UPDATE photos SET col1 = col1 + 1`, (error, results, fields) => {
    if (error) throw error;
    callback(results);
  });
}

var sendInappropriateReport = (callback, id) => {
  connection.query(`SELECT balance FROM ${username}`, (error, results, fields) => {
    if (error) throw error;
    callback(results);
  });
}
module.exports.getAllPhotos = getAllPhotos;
module.exports.sendUnrelatedReport = sendUnrelatedReport;
module.exports.sendInappropriateReport = sendInappropriateReport;