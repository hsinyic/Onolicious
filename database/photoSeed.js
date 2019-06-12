const faker = require('faker');
const jsscompress = require("js-string-compression");
// require('events').EventEmitter.defaultMaxListeners = 100;

const fs = require('fs');
const data = require('./data.js');
const Readable = require('stream').Readable;

var photoRecord = [];
var infoRecord = [];
var nRecords = Math.floor(10**5);
var diningStyle = data.diningStyle;
var diningStyleL = diningStyle.length;
var paymentOptions = data.paymentOptions;
var photoLink = data.photo;

var photoL = photoLink.length;
var columnD = ",";
let writeStreamPhoto = fs.createWriteStream('/Volumes/NO\ NAME/photo.csv');
let writeStreamInfo = fs.createWriteStream('/Volumes/NO\ NAME/info.csv');

var RestaurantInstance = function (n) {
  // this.id = n;
  // this.address = faker.address.streetAddress();
  // this.name = faker.address.streetName();
  // this.crossStreet = faker.address.streetName();
  // this.neighborhood = faker.address.city();
  // this.cuisines = faker.address.streetName();
  // this.diningStyle = diningStyle[Math.floor((Math.random() * diningStyleL))];
  // this.dressCode = this.diningStyle;
  // this.paymentOptions = "'" + paymentOptions.map((i, idx) => (Math.random() < 0.5 ? 1:0)).join('') + "'";
  // this.executiveChef = faker.name.findName();
  // // this.catering = (Math.random() < 0.4) ? "'"+ faker.lorem.paragraphs() + "'" : "'No catering'";
  // this.privatePartyContact = faker.name.findName() + ': ' + faker.phone.phoneNumberFormat().slice(0,
  //   12);
  // this.additional = "'" + faker.lorem.sentence() + "'";
  // this.website = "'" + faker.internet.url() + "'";
  // this.phoneNumber = faker.phone.phoneNumberFormat().slice(0, 12);
  // // var diningStyle = diningStyle[Math.floor((Math.random() * diningStyleL))];
  return [n, faker.address.streetAddress(), faker.address.streetName(), faker.address.streetName(), 
    faker.address.city(), faker.address.streetName(), diningStyle,  diningStyle, 
     , [ "'", ...paymentOptions.map((i, idx) => (Math.random() < 0.5 ? 1:0)), "'"].join('') 
     , faker.name.findName()
    , faker.name.findName() + ': ' + faker.phone.phoneNumberFormat().slice(0, 12)
    , "'" + faker.lorem.sentence() + "'"
    , "'" + faker.internet.url() + "'"
    , faker.phone.phoneNumberFormat().slice(0, 12)].join(columnD) + ' \n'
};

var PhotoInstance = function (n, photocount) {
  // this.id = photocount;
  // this.resid = n;
  // this.usr = faker.internet.userName();
  // this.photo = photoLink[Math.floor(Math.random() * photoL)];
  // this.datePosted = faker.date.past().toLocaleString('en-us', {year: 'numeric', month: '2-digit', day: '2-digit'}).replace('-', '');
  // this.unrelated_report = Math.random() < 0.01 ? Math.floor((Math.random() * 10)) : 0;
  // this.inappropriate_report = Math.random() < 0.01 ? Math.floor((Math.random() * 10)) : 0;
  // this.dislike = Math.random() < 0.01 ? Math.floor((Math.random() * 10)) : 0;


  return [photocount, 
    n, 
    faker.internet.userName(), 
    photoLink[Math.floor(Math.random() * photoL)], 
    faker.date.past().toLocaleString('en-us', {year: 'numeric', month: '2-digit', day: '2-digit'}).replace('-', ''), 
    Math.random() < 0.01 ? Math.floor((Math.random() * 10)) : 0,
    Math.random() < 0.01 ? Math.floor((Math.random() * 10)) : 0,
    Math.random() < 0.01 ? Math.floor((Math.random() * 10)) : 0].join(columnD) +  '\n'
  

}




function writeOneMillionTimes(writeStreamInfo, writeStreamPhoto, encoding, callback) {
  var i = 0;
  var photocount = 0;
  write();
  function write() {
    let ok = true;
    do {
      i++;
      // var resString = '';
      var photoString = '';
      // var restaurant = RestaurantInstance(i);
      // console.log(restaurant)
      // var values = Object.values(restaurant).join(columnD) + "\n";
      // resString += restaurant;
      var numOfPhotos = 15 + Math.random() * 20;
      for (var j = 1; j < numOfPhotos; j++) {
        photocount++;
        var photo = PhotoInstance(i, photocount);
        // console.log(photo)
        // var values = Object.values(photo).join(columnD) + "\n";
        photoString += photo;
      }
      // Hauffman compression for string
      // var hmPhoto = new jsscompress.Hauffman();
      // var hmInfo = new jsscompress.Hauffman();
      // var compressedPhoto = hmPhoto.compress(photoString);
      // var compressedInfo = hmInfo.compress(resString);
      if (i === nRecords) { // last time 
        writeStreamInfo.write(RestaurantInstance(i), encoding, callback);
        writeStreamPhoto.write(photoString, encoding, callback);
      } else {
        if (i % 1000 === 0) {
          console.log(i / nRecords);
        }
        infook = writeStreamInfo.write(RestaurantInstance(i), encoding);
        photook = writeStreamPhoto.write(photoString, encoding);
      }
    } while ((i < nRecords && infook ) && photook);
    if (i < nRecords) {
      if (!photook){
        writeStreamPhoto.once('drain', write);
      } else {
        writeStreamInfo.once('drain', write);
      }
    }
  }
}


writeOneMillionTimes(writeStreamInfo, writeStreamPhoto, 'utf8', () => { console.log('done') })


// writeStreamInfo.end();
// writeStreamPhoto.end();
