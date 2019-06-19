const mongoose =  require('mongoose')
mongoose.connect('mongodb://localhost:27017/iauro',(err) =>{
    if(!err){
        console.log('Mongodb connection succesful..!!');
    }
    else{
        console.log('Error in db connection.!' + JSON.stringify(err,undefined,2));
    }
})
module.exports = mongoose