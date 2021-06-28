const fs = require('fs');
let readable = fs.createReadStream('input.txt');
let writable = fs.createWriteStream('out.txt');
readable.pipe(writable);