const fs = require('fs');
fs.readFile('input.txt', function(err, data){
    if(err){
        console.log(err);
    }
    else{
        console.log("This is asynchronous data : ",data.toString());
    }
})

var data = fs.readFileSync('input.txt');
console.log("data : ", data.toString());
console.log("This is the end");