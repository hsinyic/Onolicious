const faker = require('faker');
const fs = require('fs');
const data = require('./data.js');
const Readable = require('stream').Readable;

var photoRecord = [];
var infoRecord = [];
var nRecords = Math.floor(10 ** 7);
var diningStyle = data.diningStyle;
var diningStyleL = diningStyle.length;
var dressingStyle = data.dressingStyle;
var dressingStyleL = dressingStyle.length;
var cuisine = data.cuisine;
var cuisineL = cuisine.length;
var paymentOptions = data.paymentOptions;
var photoLink = data.photo;

var photoL = photoLink.length;
var columnD = ",";
let writeStreamPhoto = fs.createWriteStream('/Volumes/NO\ NAME/photoNull.csv');
let writeStreamInfo = fs.createWriteStream('/Volumes/NO\ NAME/info1.csv');


var streetAddress = new Array(1000).fill(0).map(i => faker.address.streetAddress())
var name = new Array(1000).fill(0).map(i => faker.name.lastName())
var streetName = new Array(1000).fill(0).map(i => faker.address.streetName())
var city = new Array(1000).fill(0).map(i => faker.address.city())
var findName = new Array(1000).fill(0).map(i => faker.name.findName())
var phoneNumberFormat = new Array(1000).fill(0).map(i => faker.phone.phoneNumberFormat().slice(0, 12))
var sentence = new Array(1000).fill(0).map(i => faker.lorem.sentence())
var url = new Array(1000).fill(0).map(i => faker.internet.url())
var userName = new Array(1000).fill(0).map(i => faker.internet.userName())
var past = new Array(1000).fill(0).map(i => faker.date.past().toLocaleString('en-us', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace('-', ''))
var lorem = new Array(1000).fill(0).map(i => faker.lorem.word());
var paymentOptions = ["'0000'", "'0001'", "'0010'", "'0011'", "'0100'", "'0101'", "'0110'", "'0111'", 
"'1000'", "'1001'", "'1010'", "'1011'", "'1100'", "'1101'", "'1110'", "'1111'"]
var paymentOptionsL = paymentOptions.length;
var RestaurantInstance = function (n) {
  return [n,
    streetAddress[Math.floor(Math.random() * 1000)],
    lorem[Math.floor(Math.random() * 1000)],
    streetName[Math.floor(Math.random() * 1000)],
    city[Math.floor(Math.random() * 1000)],
    cuisine[Math.floor((Math.random() * cuisineL))],
    diningStyle[Math.floor((Math.random() * diningStyleL))],
    dressingStyle[Math.floor((Math.random() * dressingStyleL))],
    paymentOptions[Math.floor((Math.random() * paymentOptionsL))],
    findName[Math.floor(Math.random() * 1000)],
    findName[Math.floor(Math.random() * 1000)] + ': ' + phoneNumberFormat[Math.floor(Math.random() * 1000)],
    "'" + sentence[Math.floor(Math.random() * 1000)] + "'",
    "'" + url[Math.floor(Math.random() * 1000)] + "'",
    phoneNumberFormat[Math.floor(Math.random() * 1000)]].join(columnD) + ' \n'
};

var PhotoInstance = function (n, photocount) {
  return [
    photocount,
    n,
    userName[Math.floor(Math.random() * 1000)],
    photoLink[Math.floor(Math.random() * photoL)],
    past[Math.floor(Math.random() * 1000)],
    Math.random() < 0.01 ? Math.floor((Math.random() * 10)) : 0,
    Math.random() < 0.01 ? Math.floor((Math.random() * 10)) : 0,
    Math.random() < 0.01 ? Math.floor((Math.random() * 10)) : 0].join(columnD) + '\n'
}



function writeOneMillionTimes(writeStreamInfo, writeStreamPhoto, encoding, callback) {
  var i = 0;
  var photocount = 0;
  write();
  function write() {
    let ok = true;
    do {
      i++;
      var photoString = '';
      var numOfPhotos = 6 + Math.random() * 8;
      for (var j = 1; j < numOfPhotos; j++) {
        photocount++;
        var photo = PhotoInstance(i, photocount);
        photoString += photo;
      }
      if (i === nRecords) {
        writeStreamInfo.write(RestaurantInstance(i), encoding, callback);
        writeStreamPhoto.write(photoString, encoding, callback);
      } else {
        if (i % (nRecords/100) === 0) {
          console.log(i / nRecords);
        }
        infook = writeStreamInfo.write(RestaurantInstance(i), encoding);
        photook = writeStreamPhoto.write(photoString, encoding);
      }
    }

    while ((i < nRecords && infook ) && photook);
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
