const mongoose = require('mongoose');
//const url = 'mongodb+srv://rajdeep007:singh%40123@issue-tracker.pr1xw5f.mongodb.net/Issue-Tracker?retryWrites=true&w=majority';
const url ='mongodb+srv://developer786kasif:Coding%40786@cluster0.mfz18jl.mongodb.net/Issue1?retryWrites=true&w=majority';
// mongoose.connect('url') 
mongoose.connect(url);
const db=mongoose.connection;

//If any Error then Getting this Line
db.on('error',console.error.bind(console,"Error connecting to MongoDB"));   


db.once('open',()=>{
    console.log("Connected to Database :: MongoDB ")
});

module.exports=db;  //Exports db