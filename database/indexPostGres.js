var Pool = require('pg-pool')
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
info.connect()
    .then(client => {
        return client.query(
            'CREATE TABLE kitty (  \
            id integer, \
            restaurant varchar(255), \
            url varchar(255), \
            timestamp date,\
            unrelated_report integer, \
            inappropriate_report integer, \
            dislike smallint \
            );'
        ).then(res => console.log(res)) // outputs 0
        .then(() => client)
    })


// Make your API script for now 
// Successfully migrate over to PostgresMySQL 
const { Pool } = require('pg')

const pool = new Pool()
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
  })
    
client.query('CREATE TABLE kitty (  \
    id integer, \
    restaurant varchar(255), \
    url varchar(255), \
    timestamp date,\
    unrelated_report integer, \
    inappropriate_report integer, \
    dislike smallint \
    );').then((err, res) => {
    console.log(err ? err.stack : res) // Hello World!
    client.end()
})
client.query('COPY info FROM `/Users/makerpass/Documents/GitHub/Photo-module/data.csv`')
    .then( (err, res)=>{
        if(err){
            console.log(err);
        } else {
            console.log(res);
        }
})

// data seeding script
// 
// Create database 
// Breakup the database into 10 files 
// Pool it with multiple fronts 
// So that every one of



