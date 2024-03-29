var stream = require('stream');
var fs = require('fs');
var util = require('util');
const zlib = require('zlib');

var Duplex = stream.Duplex ||
  require('readable-stream').Duplex;

var a = fs.createWriteStream('test.txt',{encoding: 'utf8'});


/**
 * Duplex stream which:
 *  - generates current time every sec for rstream
 *  - outputs the write stream to stdout
 *
 * Stop the read stream by calling stopTimer
 */
function DRTimeWLog(options) {
  // allow use without new operator
  if (!(this instanceof DRTimeWLog)) {
    return new DRTimeWLog(options);
  }
  Duplex.call(this, options); // init
  this.readArr = []; // array of times to read

  // every second, add new time string to array
  this.timer = setInterval(addTime, 1000, this.readArr);
}
// subclassing.
util.inherits(DRTimeWLog, Duplex);

/* add new time string to array to read */
function addTime(readArr) {
  readArr.push((new Date()).toString());
}

DRTimeWLog.prototype._read = function readBytes(n) {
  var self = this;
  console.log('hi')
  while (this.readArr.length) {
    var chunk = this.readArr.shift();
    if (!self.push(chunk)) {
      break; // false from push, stop reading
    }
  }
  if (self.timer) { // continuing if have timer
    // call readBytes again after a second has
    // passed to see if more data then
    setTimeout(readBytes.bind(self), 1000, n);
  } else { // we are done, push null to end stream
    self.push(null);
  }
};

/* stops the timer and ends the read stream */
DRTimeWLog.prototype.stopTimer = function () {
  if (this.timer) clearInterval(this.timer);
  this.timer = null;
};

/* for write stream just ouptut to stdout */
DRTimeWLog.prototype._write =
  function (chunk, enc, cb) {
    chunk.pipe(zlib.createGzip()).pipe(a);
    // a.write(chunk.toString())
    // a.write(' \n ')
    console.log('write: ', chunk.toString());
    cb();
  };


// try out DRTimeWLog
var duplex = new DRTimeWLog();
duplex.on('readable', function () {
  var chunk;
  while (null !== (chunk = duplex.read())) {
    console.log('read: ', chunk.toString());
  }
});
duplex.write('Hello \n');
duplex.write('World');
duplex.write('meow');
duplex.write('hi');
duplex.write('what');
duplex.write('sirrrr');
duplex.write('now');
duplex.write('now again');
// duplex.end();

// after 3 seconds stop the timer
setTimeout(function () {
  duplex.stopTimer();
}, 3000);
