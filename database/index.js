const { Pool } = require('pg')

var pool = new Pool({
    //   user: "yourUser",
    //   password: "yourPass",
    // ssl: true
    database: "restaurant",
    port: 5432, 
    host: "localhost",
});

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})


var crudFxn = {}
crudFxn.getPhotos = function (index, callback) {
  pool.query(`SELECT * FROM photo where resid = $1`, [Number(index)],  (error, results, fields) => {
    if (error) {
      callback(error, null)
    } else {
      callback(null, results);
      
    }
  });
};

crudFxn.getInfo = function (index, callback) {
  pool.query(`SELECT * FROM info where id = $1`, [Number(index)], (error, results, fields) => {
    if (error) {
      callback(error, null)
    } else {
      callback(null, results);
    }  });
};

module.exports.crudFxn = crudFxn;
