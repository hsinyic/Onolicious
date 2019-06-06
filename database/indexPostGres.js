var Pool = require('pg-pool');
const { Pool } = require('pg');

var info = new Pool({
    database: 'info',
    //   user: 'brianc',
    //   password: 'secret!',
    port: 5432,
    ssl: true,
    max: 20, // set pool max size to 20
    min: 4, // set min pool size to 4
    idleTimeoutMillis: 1000, // close idle clients after 1 second
    connectionTimeoutMillis: 1000, // return an error after 1 second if connection could not be established
})

const pool = new Pool()
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})


info.connect()
    .then(client => {
        return client.query(
            'CREATE TABLE photos (  \
                id integer, \
                restaurant varchar(255), \
                url varchar(255), \
                timestamp date,\
                unrelated_report integer, \
                inappropriate_report integer, \
                dislike smallint \
            );'
        ).then((err, res) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Successfully created table photos")
                client.query('COPY photo FROM `/Users/makerpass/Documents/GitHub/Photo-module/photo.csv`')
                    .then((err, res) => {
                        console.log(err ? err.stack : "res")
                    }).then(() => client)
            }
        }).then(() => client)
    })




info.connect()
    .then(client => {
        return client.query(
            'CREATE TABLE info (  \
            id integer, \
            restaurant varchar(255), \
            address varchar(255), \
            crossStreet varchar(255), \
            neighborhood varchar(255), \
            neighborhood varchar(255), \
            hoursOfOperation varchar(255), \
            cuisines varchar(255), \
            diningStyle varchar(255), \
            dressCode varchar(255), \
            paymentOptions varchar(255), \
            executiveChef varchar(255), \
            additional varchar(255), \
            website varchar(255), \
            phoneNumber varchar(255) \
        );'
        ).then((err, res) => {
            if (err) {
                console.log(err)
            } else {
                console.log("Successfully created table info")
                // console.log(err ? err.stack : "res") 
            }
        }).then(() => client)
    })






