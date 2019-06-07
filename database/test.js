
var child = require('child_process'),
fs = require('fs');

var myREPL = child.spawn('node'),
myFile = fs.createWriteStream('myOutput.txt');

myREPL.stdout.pipe(process.stdout, { end: false });
myREPL.stdout.pipe(myFile);

process.stdin.resume();

process.stdin.pipe(myREPL.stdin, { end: false });
process.stdin.pipe(myFile);
console.log('HELLLLLOOOOO')
myREPL.stdin.on("end", function() {
process.stdout.write("REPL stream ended.");
});

myREPL.on('exit', function (code) {
process.exit(code);
});