const faker = require('faker');
const fs = require('fs');
const data = require('./data.js');
var photoRecord = [];
var infoRecord = [];
var nRecords = Math.floor(10 ** 6/3);
var diningStyle = data.diningStyle;
var diningStyleL = diningStyle.length;
var paymentOptions = data.paymentOptions;
var photoLink = data.photo;

var photoL = photoLink.length;
var columnD = '","';
let writeStreamPhoto = fs.createWriteStream('photo.csv');
let writeStreamInfo = fs.createWriteStream('info.csv');

var RestaurantInstance = function (n) {
  this.id = n.toString().padStart(12, '0');
  this.address = faker.address.streetAddress();
  this.crossStreet = faker.address.streetName();
  this.neighborhood = faker.address.city();
  this.cuisines = faker.address.streetName();
  this.diningStyle = diningStyle[Math.floor((Math.random() * diningStyleL))];
  this.dressCode = this.diningStyle;
  this.paymentOptions = paymentOptions.filter((i, idx) => (Math.random() < 0.66)).join(', ');
  this.chef = faker.name.findName();
  this.catering = (Math.random() < 0.4) ? faker.lorem.paragraphs() : 'No catering';
  this.privatePartyContact = faker.name.findName() + ': ' + faker.phone.phoneNumberFormat().slice(0,
    12);
  this.executiveChef = faker.name.findName();
  this.additional = faker.lorem.sentence();
  this.website = faker.internet.url();
  this.phoneNumber = faker.phone.phoneNumberFormat().slice(0, 12);
};

var PhotoInstance = function (n, photocount) {
  this.id = photocount;
  this.resid = n.toString().padStart(12, '0');
  this.photo = photoLink[Math.floor(Math.random() * photoL)];
  this.user = faker.internet.userName();
  this.date_posted = String(faker.date.past());
  this.flagged = Math.random() > 0.01 ? 0 : 1;
}


var count = new Array(nRecords).fill(0)
var photocount = 0
count.forEach((val, i) => {
  var restaurant = new RestaurantInstance(i);
  var numOfPhotos = 15 + Math.random() * 20;
  for (var j = 0; j < numOfPhotos; j++) {
    var photo = new PhotoInstance(i, photocount);
    var photoString = ""
    if (j === 0 && i === 0) {
      var keys = '"' + Object.keys(photo).join(columnD) + '"\n';
      photoString += keys;
    }
    var values = '"' + Object.values(photo).join(columnD) + '"\n'
    photoString += values
    photocount++;
    writeStreamPhoto.write(photoString)
  }
  if (i === 0) {
    writeStreamInfo.write(Object.keys(restaurant).join(columnD) + '"\n');
  }
  if (i % 10 ** 5 == 0) {
    console.log(i / nRecords);
  }
  writeStreamInfo.write(Object.values(restaurant).join(columnD) + '"\n');
})
writeStreamInfo.end();
writeStreamPhoto.end();



