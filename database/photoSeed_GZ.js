const faker = require('faker');
// require('events').EventEmitter.defaultMaxListeners = 100;

const fs = require('fs');
const data = require('./data.js');
const Readable = require('stream').Readable;
const zlib = require('zlib');
const gzip = zlib.createGzip();
const gzip2 = zlib.createGzip();



var nRecords = Math.floor(10 ** 2);
var diningStyle = data.diningStyle;
var diningStyleL = diningStyle.length;
var paymentOptions = data.paymentOptions;
var photoLink = data.photo;

var photoL = photoLink.length;
var columnD = ",";
var writeStreamPhoto = fs.createWriteStream('photo.csv.gz');
var writeStreamInfo = fs.createWriteStream('info.csv.gz');

var RestaurantInstance = function (n) {
    this.id = n;
    this.address = faker.address.streetAddress();
    this.name = faker.address.streetName();
    this.crossStreet = faker.address.streetName();
    this.neighborhood = faker.address.city();
    this.cuisines = faker.address.streetName();
    this.diningStyle = diningStyle[Math.floor((Math.random() * diningStyleL))];
    this.dressCode = this.diningStyle;
    this.paymentOptions = paymentOptions.map((i, idx) => (Math.random() < 0.5 ? 1 : 0)).join('');
    this.executiveChef = faker.name.findName();
    this.privatePartyContact = faker.name.findName() + ': ' + faker.phone.phoneNumberFormat().slice(0,
        12);
    this.additional = "'" + faker.lorem.sentence() + "'";
    this.website = "'" + faker.internet.url() + "'";
    this.phoneNumber = faker.phone.phoneNumberFormat().slice(0, 12);

};

var PhotoInstance = function (n, photocount) {
    this.id = photocount;
    this.resid = n;
    this.usr = faker.internet.userName();
    this.photo = photoLink[Math.floor(Math.random() * photoL)];
    this.datePosted = faker.date.past().toLocaleString('en-us', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace('-', '');
    this.unrelated_report = Math.random() < 0.01 ? Math.floor((Math.random() * 10)) : 0;
    this.inappropriate_report = Math.random() < 0.01 ? Math.floor((Math.random() * 10)) : 0;
    this.dislike = Math.random() < 0.01 ? Math.floor((Math.random() * 10)) : 0;
}




function writeOneMillionTimes(writeStreamInfo, writeStreamPhoto, encoding, callback) {
    var i = 0;
    var photocount = 0;
    write();
    function write() {
        let ok = true;
        do {
            i++;
            var resString = '';
            var photoString = '';
            var restaurant = new RestaurantInstance(i);
            var values = Object.values(restaurant).join(columnD) + "\n ";
            resString += values;

            if (i === nRecords) { // last time 
                writeStreamInfo.write(resString, callback);
            } else {
                if (i % 1000 === 0) {
                    console.log(i / nRecords);
                }
                var inputHeader = new Readable({encoding: 'utf8'})
                inputHeader._read = () => {};  
                inputHeader.push(resString);     
                infook = inputHeader.pipe(gzip).pipe(writeStreamInfo);        
            }
        } while (i < nRecords && infook);
        if (i < nRecords) {
            writeStreamInfo.once('drain', write);
        }
    }
}


writeOneMillionTimes(writeStreamInfo, writeStreamPhoto, 'utf8', () => { console.log('done') })


// writeStreamInfo.end();
// writeStreamPhoto.end();
