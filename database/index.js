const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
  if (err) {
    console.error('mysql connection error!');
    return;
  }
  console.log('mysql connected!');
});

var crudFxn = {}
crudFxn.getPhotos = function (index, callback) {
  connection.query(`SELECT * FROM photos where id =? `, [index], (error, results, fields) => {
    if (error) throw error;
    callback(results);
  });
};

crudFxn.getInfo = function (index, callback) {
  connection.query(`SELECT * FROM info where id = ?`, [index], (error, results, fields) => {
    if (error) throw error;
    callback(results);
  });
};


// post arrays of data into your crudFxn 
crudFxn.postInfo = function (data, callback) {
  connection.query(`SELECT * FROM info (?, ?, ?, ?, ?, ?, ?) VALUES (?, ?, ?, ?, ?, ?, ?) where id = ?`,
    ['id', 'restaurant', 'url', 'timestamp', 'unrelated_report', 'inappropriate_report', 'dislike',
      data.id, data.restaurant, data.url, data.timestamp, data.unrelated_report, data.inappropriate_report, data.dislike],
    (error, results, fields) => {
      if (error) throw error;
      callback(results);
    });
}

// post arrays of data. photos are arrays of data into your crudFxn 

crudFxn.postPhoto = function (data, callback) {
  // refer to line 31 
}
crudFxn.editInfo = function (index, data, callback) {
  // refer to line 31 

}


crudFxn.editPhoto = function (index, data, callback) {
  // refer to line 31 

}


module.exports.crudFxn = crudFxn;
