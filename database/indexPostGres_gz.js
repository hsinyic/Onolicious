const { Pool } = require('pg')

var pool = new Pool({
    database: "restaurant",
    port: 5432, 
    host: "localhost",
});

pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})


pool.query(
    '\
    CREATE TABLE photo (  \
                id integer, \
                resid integer, \
                usr varchar(255), \
                photo varchar(255), \
                datePosted varchar,\
                unrelated_report integer, \
                inappropriate_report integer, \
                dislike smallint \
            );'
            // id integer, \
    , "").then(res => {
        pool.query("COPY photo FROM '/Users/makerpass/Documents/GitHub/Photo-module/photo.csv' (format csv, delimiter '|');").then(res => {
                console.log(res);
            }).catch(e => {
                console.log(e.stack)
            })
    }).catch(e => {
        console.log(e.stack);
    })



pool.query(
    ' \
     CREATE TABLE info (  \
        id integer, \
        address varchar(255), \
        name varchar(1000), \
        crossStreet varchar(255), \
        neighborhood varchar(255), \
        cuisines varchar(255), \
        diningStyle varchar(255), \
        dressCode varchar(255), \
        paymentOptions varchar(255), \
        executiveChef varchar(255), \
        privatePartyContact varchar(255), \
        additional varchar(1000), \
        website varchar(255), \
        phoneNumber varchar(255) \
    );'
    // catering varchar(1000), \
    , "").then(res => {
        pool.query("COPY info FROM '/Users/makerpass/Documents/GitHub/Photo-module/info.csv' (format csv, delimiter '|');")
            .then(res => {
                console.log(res);
                // console.log(res.rows[0]) // unfortunately res.rows do not give back your specific rows; 
            }).catch(e => {
                console.log(e.stack)
            })
    }).catch(e => {
        console.log(e.stack);
    })






