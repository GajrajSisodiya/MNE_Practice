const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/ttchanel", {useUnifiedTopology: true, useNewUrlParser: true})
.then(()=> {console.log('connection Successfull ')})
.catch((err)=>console.log(err));

const playListSchema = new mongoose.Schema({
    name:{
        type: String,
        rquired: true
    },
    ctype:String,
    videos:Number,
    author:String,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})

const PlayList = new mongoose.model('playList', playListSchema)
const createList = async () => {

    try{
    const reactList = new PlayList({
    name:"React Js",
    ctype:"FrontJs",
    videos:50,
    author:"tejas Sir",
    active:true
    })

    const GsList = new PlayList({
    name:"Gajraj Js",
    ctype:"All-Rounder",
    videos:100000000000,
    author:"tejas bhai",
    active:true
    })
    
    const PDList = new PlayList({
    name:"Peedluk Js",
    ctype:"FrontJs",
    videos:50,
    author:"tejas siri",
    active:true
    })

const result = await PlayList.insertMany([ reactList, GsList, PDList]); // For many data
// const result = await reactList.save(); // For one data 
console.log(result);
}
catch(err){
    console.log(err);
}
}

// const getDocument = async () => { 
//     const result = await PlayList.find({ctype: 'FrontJs'}, {_id:0})
//     .select({name:0})
//     console.log(result);
// }

const updateDocument = async (_id) => {
    const result = await PlayList.findByIdAndUpdate({_id},{
        $set:{
            name: "Javascript"}
        },
        {new:true,
        userFindAndModify: false
    });
        console.log(result);
}

// updateDocument("60d337874595ef26fc00061b");
// getDocument();
// createList();

const deleteDocument = async (_id) => {
    try{
        const result = await PlayList.findByIdAndDelete({_id});
        // const result = await PlayList.deleteOne({_id});
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

deleteDocument("60d337874595ef26fc00061b");