var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/fruits';

MongoClient.connect(url, {useNewUrlParser:true, useUnifiedTopology: true }, function(err, db) {
    if(err){
        console.log(err);
    }
    else{
        console.log("Connect to ",url);
        db.close();
    }
})