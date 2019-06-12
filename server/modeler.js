const { Pool } = require('pg')

var pool = new Pool({
    //   user: "yourUser",
    //   password: "yourPass",
    // ssl: true
    database: "restaurant",
    port: 5432, // investigate why changing it to 5433 would not allow connection. I thought postgreSQL is built based on 5433 on my starter? 
    host: "localhost",
});

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})


var modeler = {};

modeler.getPhoto = function (id, cb) {
    pool.query(`SELECT * FROM restaurant.info WHERE id =` + id, (err, data) => {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    })
}


modeler.getInfo = function (id, cb) {
    pool.query(`SELECT * FROM restaurant.photo WHERE id =` + id, (err, data) => {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    })
}


modeler.updatePhoto = function (id, cb) {
    pool.query(`SELECT * FROM restaurant.photo WHERE id =` + id, (err, data) => {
        if (err) {
            cb(err, null);
        } else {
            cb(null, data);
        }
    })
}





module.exports = modeler;