const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/demo');

const db=mongoose.connection;

db.on('error',console.error.bind(console,'error'));

db.once('open',function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('successfully connected to db');
})
module.exports=db;