const fs = require('fs');
const readStream = fs.createReadStream('input.txt');
var data ='';
readStream.setEncoding('utf-8')
readStream.on('data', function(chunk){
    data+=chunk;
})

readStream.on('end', function(){
    console.log('data : ', data);
})

var writeData = 'Hello World';
var writable = fs.createWriteStream('output.txt');
writable.write(writeData, 'utf-8');
writable.end();
writable.on('finish', function(){
    console.log('write completed');
})