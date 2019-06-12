// ############
// # Test Code 
// ############

const { Pool } = require('pg')

const pool = new Pool({
    //   user: "yourUser",
    //   password: "yourPass",
    database: "restaurant",
    // port: 5433,
    // host: "localhost",
    // ssl: true
})

// the pool with emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
    console.error('Unexpected error on idle client', err)
    process.exit(-1)
})

// callback - checkout a client
// pool.connect((err, client, done) => {
//     if (err) throw err
//     client.query('SELECT * FROM users WHERE id = $1', [1], (err, res) => {
//         done()

//         if (err) {
//             console.log(err.stack)
//         } else {
//             console.log(res.rows[0])
//         }
//     })
// })

// promise - checkout a client
pool.connect()
    .then(client => {
        return client.query('SELECT * FROM users WHERE id = $1', [1])
            .then(res => {
                client.release()
                console.log(res.rows[0])
            })
            .catch(e => {
                client.release()
                console.log(err.stack)
            })
    })

    // async/await - check out a client
    // (async () => {
    //     const client = await pool.connect()
    //     try {
    //         const res = await client.query('SELECT * FROM users WHERE id = $1', [1])
    //         console.log(res.rows[0])
    //     } finally {
    //         client.release()
    //     }
    // })().catch(e => console.log(e.stack))


// CREATE TABLE users(
//     id integer,
//     address varchar(255)
// );

// INSERT INTO users
// INSERT INTO users(id, address)
// VALUES
//     (1, 'a'),
//     (3, 'b'),
//     (4, 'c'),
//     (5, 'd'),
//     (7, 'e'),
//     (9, 'f'),
//     (10, 'g'),
//     (12, 'h');


