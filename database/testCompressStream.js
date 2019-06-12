const Readable = require('stream').Readable
const fs = require('fs')
const zlib = require('zlib');
const gzip = zlib.createGzip();
const copyFrom = require('pg-copy-streams').from;

var d = ` 111044 , 'Deleniti rerum minima dicta.' , '985 Isaiah Locks' , 'Reymundo Roads' , 'Lamar Shore' , 'Casual Dining' , 'Casual Dining' , 'Torrey Stoltenberg' , 'Nolan Views' , 'Prohaskachester' , 1011 , '579-926-5032' , 'Breanna Nader: 858-205-5056' , 'http://kaelyn.biz' \n \
111045 , 'Hello Kitty' , '1617 Clark St' , 'Meowwwww ' , 'Who's that , 'Casual Dining' , 'Casual Dining' , 'Kitty fart' , 'Cute paws' , 'Tuna can' , 1011 , '890-567-1234' , 'Big meow: 808-205-5056' , 'http://www.cat.com'  \n \
111049 , 'Hello Dog' , '1617 Clark St' , 'Meowwwww ' , 'Who's that , 'Casual Dining' , 'Casual Dining' , 'Kitty fart' , 'Cute paws' , 'Tuna can' , 1011 , '890-567-1234' , 'Big meow: 808-205-5056' , 'http://www.cat.com' \n `

// id,address,name, crossstreet, neighborhood, cuisines , diningstyle , dresscode ,paymentoptions , executivechef, privatepartycontact,additional, website, phonenumber \n \

var inputHeader = new Readable({encoding: 'utf8'})
inputHeader._read = () => { };  
inputHeader.push(d);
inputHeader.push(null);
var csvNoHeader = fs.createWriteStream('test.csv.gz',{encoding: 'utf8'});
inputHeader.pipe(gzip).pipe(csvNoHeader);

var d2 = ` 111045 , 's;dfjsldfjl;sdkf.' , '985 Isaiah Locks' , 'Reymundo Roads' , 'Lamar Shore' , 'Casual Dining' , 'Casual Dining' , 'Torrey Stoltenberg' , 'Nolan Views' , 'Prohaskachester' , 1011 , '579-926-5032' , 'Breanna Nader: 858-205-5056' , 'http://kaelyn.biz' \n  \
  111045 , 'Z:LXX>X<MCNVCV' , '1617 Clark St' , 'Meowwwww ' , 'Who's that , 'Casual Dining' , 'Casual Dining' , 'Kitty fart' , 'Cute paws' , 'Tuna can' , 1011 , '890-567-1234' , 'Big meow: 808-205-5056' , 'http://www.cat.com'  \n  \
  111047 , '23-04809825824-0' , '1617 Clark St' , 'Meowwwww ' , 'Who's that , 'Casual Dining' , 'Casual Dining' , 'Kitty fart' , 'Cute paws' , 'Tuna can' , 1011 , '890-567-1234' , 'Big meow: 808-205-5056' , 'http://www.cat.com' \n `

var inputHeader2 = new Readable({encoding: 'utf8'})
inputHeader2._read = () => { };  
inputHeader2.push(d2);     
// inputHeader2.push(null);  
inputHeader2.pipe(gzip).pipe(csvNoHeader);



const { Pool } = require('pg');
var pool = new Pool({
    database: "restaurant",
    port: 5432, 
    host: "localhost",
});


var compressedData = fs.createReadStream('inpCustom.txt.gz');
// var compressedData1 = fs.createReadStream('inpCustom.txt.gz');
// var compressedData2 = fs.createReadStream('inpCustom.txt.gz');
var compressedData3 = fs.createReadStream('inpCustom.txt.gz');
// var compressedData4 = fs.createReadStream('inpCustom.txt.gz');
// compressedData4._read = () => { };
// var compressedData5 = fs.createReadStream('inpCustom.txt.gz');
var compressedData6 = fs.createReadStream('csvHeader.csv.gz');
var compressedData7 = fs.createReadStream('csvHeader.csv.gz');
var compressedData8 = fs.createReadStream('csvHeader.csv.gz');



var postgresInsert = pool.query(copyFrom('COPY info ( id,address,name, crossstreet, neighborhood, cuisines , diningstyle , dresscode ,paymentoptions , executivechef, privatepartycontact,additional, website, phonenumber) FROM STDIN', [])   ).then(res => {
    console.log(res);
}).catch(e => {
    console.log(e.stack)
});

postgresInsert.on( 'error', done );
postgresInsert.on( 'end', done );
compressedData.pipe(zlib.createGunzip()).pipe(postgresInsert);
// compressedData1.pipe(zlib.createGunzip()).pipe(process.stdout);
// compressedData2.pipe(zlib.createGunzip()).pipe(process.stdout);
compressedData3.pipe(zlib.createGunzip()).pipe(process.stdout)
.pipe(postgresInsert);
// compressedData4.pipe(zlib.createGunzip()).pipe(postgresInsert);
compressedData5.pipe(zlib.createGunzip()).pipe(process.stdin).pipe(postgresInsert);


compressedData6.pipe(zlib.createGunzip()).pipe(process.stdout)

compressedData7.pipe(zlib.createGunzip()).pipe(process.stdout)
compressedData8.pipe(zlib.createGunzip()).pipe(process.stdin)



var bytesRead = 500;
var decompressStream = zlib.createGunzip()
    .on('data', function (chunk) {
        parseHeader(chunk);
        decompressStream.pause();
    }).on('error', function(err) {
        handleGunzipError(err, file, chunk);
    });

fs.createReadStream('inpCustom.txt.gz', {start: 0, end: bytesRead, chunkSize: bytesRead + 1})
    .on('data', function (chunk) {
        decompressStream.write(chunk);
    });



const es = require('es');
const pgs = require('pg-copy-stream');
pool.query('').then(res => {
    console.log(res);
}).catch(e => {
    console.log(e.stack);
})
var query = client.query(pgs.from('COPY info ( id,address,name, crossstreet, neighborhood, cuisines , diningstyle , dresscode ,paymentoptions , executivechef, privatepartycontact,additional, website, phonenumber) FROM STDIN'));
var fstream = fs.createReadStream('inpCustom.txt.gz');
fstream
.pipe(es.split())
.pipe(es.mapSync(function (line) {
        var midline = line.split('\t').map(sometransform()).join('\t');
        return midline + '\n';
}).pipe(query)
    .on('end', done)
    .on('err', somethingelse)
)
