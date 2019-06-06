const faker = require('faker');
const fs = require('fs');
const data = require('./data.js');
var photoRecord = [];
var infoRecord = [];
var nRecords = 10 ** 6;
var diningStyle = data.diningStyle;
var diningStyleL = diningStyle.length;
var paymentOptions = data.paymentOptions;
var photoLink = data.photo;
var photoL = photoLink.length;

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

var PhotoInstance = function (n) {
  this.id = n.toString().padStart(12, '0');
  this.photo = photoLink[Math.floor(Math.random() * photoL)];
  this.user = faker.internet.userName();
  this.date_posted = faker.date.past();
  this.flagged = Math.random() > 0.01 ? true : false;
}


var count = new Array(nRecords).fill(0)
count.forEach((val, i) => {
  var restaurant = new RestaurantInstance(i);
  var numOfPhotos = 15 + Math.random() * 20;
  for (var j = 0; j < numOfPhotos; j++) {
    photoRecord.push(new PhotoInstance(i));
  }
  infoRecord.push(restaurant);
  if (i % 10 ** 4 == 0) {
    console.log(i / nRecords);
  }

})


function csvConvert(data) {
  var result, ctr, keys, columnD, lineD;
  columnD = ',';
  lineD = '\n';
  keys = Object.keys(data[0]);
  result = '';
  result += keys.join(columnD);
  result += lineD;

  data.forEach(item => {
    ctr = 0;
    keys.forEach(function (key) {
      if (ctr > 0) result += columnD;
      result += item[key];
      ctr++;
    });
    result += lineD;
  });
  return result;

}
fs.writeFile('photo.js', csvConvert(infoRecord), (err, success) => {
  if (err) {
    throw err;
  } else {
    console.log('successfully generated photoRecord')
  }
})

fs.writeFile('info.js', csvConvert(infoRecord), (err, success) => {
  if (err) {
    throw err;
  } else {
    console.log('successfully generated infoRecord')
  }
})



let writeStream = fs.createWriteStream('photo.csv');
// write some data with a base64 encoding
writeStream.write('aef35ghhjdk74hja83ksnfjk888sfsf', ',', 'base64');
var nColumns = 10
for (let i = 0; i < 100; i++) {
  const element = Math.random().toString();
  writeStream.write(element);
  if (i % 10 === nColumns - 1) {
    writeStream.write('\n')
  } else {
    writeStream.write(',')
  }
}
// the finish event is emitted when all data has been flushed from the stream
writeStream.on('finish', () => {
  console.log('wrote all data to file');
});

// close the stream
writeStream.end();




// var fs  = require('fs'),
//     es = require('event-stream');



// var totalLines = 0 ;
// var names = [];
// var firstNames = [];
// var dupeNames = {}

// var dateDonationCount = [];
// var dateDonations = {};
// var s = fs
//   .createReadStream('/photo.js')
//   .pipe(es.split())
//   .pipe(
//     es.mapSync(function(line){
//       totalLines++; 

//       //get all names 
//       var name = line.split('|')[7];
//       if (totalLines ===433 || totalLines === 43244){
//         name.push(name);
//       }

//       var firstHalfOfName = name.split(', ')[1];

//     })
//   )
